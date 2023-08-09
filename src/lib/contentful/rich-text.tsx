import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { FC } from 'react';

interface IRichText {
    richText?: Document;
    config?: Partial<Options>;
}

export const RichText: FC<IRichText> = ({ richText, config }) => {
    if (!richText) {
        return null
    }
    
    return documentToReactComponents(richText, config)
}