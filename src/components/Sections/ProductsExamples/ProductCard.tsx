"use client"
import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { ICardFields } from "@/__generated/contentful";
import { BLOCKS } from '@contentful/rich-text-types';
import { RichText } from "@/lib/contentful/rich-text";
import CustomImage from "@/components/shared/CustomImage";
import { Options } from "@contentful/rich-text-react-renderer";
import { IProductCard } from "./declarations";
import './ProductsExample.scss';
import { getElementHeight } from "@/lib/html";

const getRichTextConfig = (): Partial<Options> => ({
    renderNode: {
        // @ts-ignore
        [BLOCKS.PARAGRAPH]: (_, children) => <p className="paragraph">{children}</p>,
        [BLOCKS.TABLE]: (_, children) => {
            return <table className="card-table" cellSpacing={0}>{children}</table>
        },
        [BLOCKS.TABLE_HEADER_CELL]: (_, children) => {
            return <th scope="col">{children}</th>
        },
        [BLOCKS.TABLE_ROW]: (_, children) => {
            return <tr className="card-tr">{children}</tr>
        },
        [BLOCKS.TABLE_CELL]: (_, children) => {
            return <td className="card-td">{children}</td>
        }
    }
})


const ProductCard: FC<IProductCard> = ({ card }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [descriptionStyles, setDescriptionStyles] = useState<CSSProperties>({});

    if (!card?.fields) {
        return null;
    }

    useEffect(() => {
        const wrapper = cardRef.current;

        if (!wrapper) {
            return;
        }

        const image = wrapper.querySelector('.card-image');
        const title = wrapper.querySelector('.card-title');
        const maxDescriptionHeight = wrapper.clientHeight - getElementHeight(image) - getElementHeight(title);
        setDescriptionStyles({ maxHeight: `${maxDescriptionHeight}px` })
    }, [cardRef])

    const cardFields = card.fields as ICardFields;


    return <div ref={cardRef} className="card">
        <CustomImage
            media={cardFields.image}
            width={300}
            height={200}
            className='card-image'
        />
        <h3 className="card-title">{cardFields.title}</h3>
        <div className="card-description" style={descriptionStyles}>
            <RichText
                richText={cardFields.description}
                config={getRichTextConfig()}
            />
        </div>
    </div>

}

export default ProductCard;