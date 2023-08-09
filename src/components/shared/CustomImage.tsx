import { IImageFields } from "@/__generated/contentful";
import Image, { ImageProps } from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { FC } from "react";
import { Options } from "@contentful/rich-text-react-renderer";

interface IImage extends Omit<ImageProps, 'src' | 'alt'> {
    media: IImageFields['media'];
    src?: ImageProps['src'];
    alt?: ImageProps['alt'];
    isNext?: boolean;
}

const CustomImage: FC<IImage> = ({
    media,
    isNext = true,
    ...rest
}) => {
    if (!media?.fields) {
        return null;
    }

    const image = media.fields.file;

    if (!image?.url) {
        return null;
    }

    const url = `https:${image.url.toString()}`
    if (isNext) {

        return <Image src={url} alt={media.fields.title as string} {...rest}  />
    }

    return <img src={url} alt={media.fields.title as string} />
}

export default CustomImage;