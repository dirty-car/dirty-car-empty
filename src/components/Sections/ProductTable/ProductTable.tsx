import { IBlock, IBlockFields } from "@/__generated/contentful";
import { CommonSection } from "@/types/component-types";
import { FC } from "react";
import { RichText } from "@/lib/contentful/rich-text";
import { BLOCKS } from '@contentful/rich-text-types';
import { Options } from "@contentful/rich-text-react-renderer";
import './ProductTable.scss';

const getRichTextConfig = (): Partial<Options> => ({
    renderNode: {
        // @ts-ignore
        [BLOCKS.PARAGRAPH]: (_, children) => <>{children}</>,
        [BLOCKS.TABLE]: (_, children) => {
            return <table className="table table-hover" cellSpacing={0}>{children}</table>
        },
        [BLOCKS.TABLE_HEADER_CELL]: (_, children) => {
            return <th scope="col">{children}</th>
        },
        [BLOCKS.TABLE_ROW]: (_, children) => {
            return <tr>{children}</tr>
        },
        [BLOCKS.TABLE_CELL]: (_, children) => {
            return <td>{children}</td>
        }
    }
})

const ProductTable: FC<CommonSection> = ({ blocks }) => {
    const [block] = blocks as Array<IBlock>;

    if (!block?.fields) {
        return null;
    }

    const blockFields = block.fields as IBlockFields;

    return (
        <section className="wrapper">
            <h2 className="title">{blockFields.title}</h2>
            <div className="table-wrapper">
                <RichText richText={blockFields.content} config={getRichTextConfig()} />
            </div>
        </section>
    );
}

export default ProductTable;