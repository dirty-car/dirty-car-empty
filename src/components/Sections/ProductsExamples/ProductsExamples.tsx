import { IBlock, IBlockFields } from "@/__generated/contentful";
import { CommonSection } from "@/types/component-types";
import { FC } from "react";
import ProductCard from "./ProductCard";
import { RichText } from "@/lib/contentful/rich-text";
import { BLOCKS } from '@contentful/rich-text-types';
import { Options } from "@contentful/rich-text-react-renderer";
import './ProductsExample.scss';

const P: FC<any> = ({ children }) => {
    return <p>{children}</p>
}

const getRichTextConfig = (): Partial<Options> => ({
    renderNode: {
        // @ts-ignore
        [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>
    }
})

const ProductsExamples: FC<CommonSection> = ({ blocks }) => {
    const [block] = blocks as Array<IBlock>;

    if (!block?.fields) {
        return null;
    }

    const blockFields = block.fields as IBlockFields;
    const cards = blockFields.components
        ?.filter((component) => component.sys.contentType.sys.id === 'card') || []

    return (
        <section className="products">
            <h2 className="title">{blockFields.title}</h2>
            <div className="description">
                <RichText
                    richText={blockFields.content}
                    config={getRichTextConfig()}
                />
            </div>
            <div className="cards">
                {cards.map((component) =>
                    <ProductCard
                        key={(component.fields as any)?.entryName}
                        card={component as any}
                    />)
                }
            </div>
        </section>
    );
}

export default ProductsExamples;