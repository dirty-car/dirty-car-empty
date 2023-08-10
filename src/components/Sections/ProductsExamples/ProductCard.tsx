import { FC } from "react";
import { ICardFields } from "@/__generated/contentful";
import { BLOCKS } from '@contentful/rich-text-types';
import { RichText } from "@/lib/contentful/rich-text";
import CustomImage from "@/components/shared/CustomImage";
import { Options } from "@contentful/rich-text-react-renderer";
import { IProductCard } from "./declarations";
import './ProductsExample.scss';

const getRichTextConfig = (): Partial<Options> => ({
    renderNode: {
        // @ts-ignore
        [BLOCKS.PARAGRAPH]: (_, children) => <p className="paragraph">{children}</p>
    }
})

const ProductCard: FC<IProductCard> = ({ card }) => {
    if (!card?.fields) {
        return null;
    }

    const cardFields = card.fields as ICardFields;


    return <div className="card">
        <CustomImage
            media={cardFields.image}
            width={300}
            height={200}
            className='card-image'
        />
        <h3 className="card-title">{cardFields.title}</h3>
        <div className="card-description">
            <RichText
                richText={cardFields.description}
                config={getRichTextConfig()}
            />
        </div>
    </div>

}

export default ProductCard;