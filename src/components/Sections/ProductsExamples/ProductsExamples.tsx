import { IBlock, IBlockFields } from "@/__generated/contentful";
import { CommonSection } from "@/types/component-types";
import { FC } from "react";
import ProductCard from "./ProductCard";
import { RichText } from "@/lib/contentful/rich-text";
import { BLOCKS } from '@contentful/rich-text-types';
import { Options } from "@contentful/rich-text-react-renderer";

const P: FC<any> = ({ children }) => {
    return <p>{children}</p>
}

const getRichTextConfig = (): Partial<Options> => ({
    renderNode: {
        // @ts-ignore
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
    }
})

const ProductsExamples: FC<CommonSection> = ({ blocks }) => {
    const [block] = blocks as Array<IBlock>;

    if (!block?.fields) {
        return null;
    }

    const blockFields = block.fields as IBlockFields;

    return (
        <section>
            <h2>{blockFields.title}</h2>
            <RichText richText={blockFields.content} config={getRichTextConfig()} />
            <div>{blockFields.components
                ?.filter((component) => component.sys.contentType.sys.id === 'card')
                ?.map((component) => <ProductCard
                    key={(component.fields as any)?.entryName}
                    card={component as any}
                />)}</div>
        </section>
    );
}

export default ProductsExamples;