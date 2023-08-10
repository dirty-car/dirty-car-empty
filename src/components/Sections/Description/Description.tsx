import { IBlock, IBlockFields, ICardFields, IImageFields } from "@/__generated/contentful";
import { BLOCKS } from '@contentful/rich-text-types';
import { FC } from "react";
import { CommonSection } from "@/types/component-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { RichText } from "@/lib/contentful/rich-text";
import CustomImage from "@/components/shared/CustomImage";
import './Description.scss'

const getRichTextConfig = (): Partial<Options> => ({
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_, children) => <p className="text">{children}</p>,
        [BLOCKS.HEADING_1]: (_, children) => children,
        [BLOCKS.HEADING_2]: (_, children) => <h2 className="h2 text">{children}</h2>,
        [BLOCKS.HEADING_3]: (_, children) => <h3 className="h3 text">{children}</h3>,
    }
})

const Description: FC<CommonSection> = ({ blocks }) => {
    const [block] = blocks as Array<IBlock>;

    if (!block?.fields) {
        return null;
    }

    const blockFields = block.fields as IBlockFields;
    const imageFields = (blockFields.image?.fields || {}) as IImageFields;

    return <section className="wrapper">
        <h1 className="h1 text">{blockFields.title}</h1>
        <RichText config={getRichTextConfig()} richText={blockFields.content} />
        <CustomImage width={600} height={300} media={imageFields.media} isNext />
    </section>

}

export default Description;