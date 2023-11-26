"use client"
import type { IBlockFields, IImageFields, IPage, IPageFields, IText, ITextFields } from "@/__generated/contentful";
import { FC } from "react";
import './Header.scss'
import CustomImage from "../shared/CustomImage";
import Select from 'react-select'
import { useRouter, useParams } from "next/navigation";

const LANG_PROP = 'lang';

interface HeaderInterface {
    header: IPageFields['header'];
}

interface LogoInterface {
    image?: IImageFields;
}

/* Nested component */
const Logo: FC<LogoInterface> = ({ image }) => {
    const imageFile = image?.media?.fields?.file;
    if (!image?.media?.fields?.file) {
        return null;
    }

    const details = (imageFile!.details || {}) as any
    const height = image.height || details.image?.height || 70;
    const width = image.width || details?.image?.width || 70;

    return <CustomImage
        className="logo"
        media={image.media}
        width={width}
        height={height}
    />
}

/* Main component */
const Header: FC<HeaderInterface> = ({
    header,
}) => {
    const router = useRouter();
    const params = useParams()

    const lang = params[LANG_PROP] || 'ru'

    if (!header?.fields) {
        return null;
    }

    const headerFields = header.fields as IBlockFields;
    const imageFields = headerFields.image?.fields as IImageFields | undefined
    const { components } = headerFields
    const languageSwitchers = (components?.filter((item) => item.sys.contentType.sys.id === 'text') || []) as Array<IText>;
    const options = languageSwitchers.reduce((accum, item) => {
        const textFields = item.fields as ITextFields;

        return [...accum, { value: textFields.shortText, label: textFields.longText }];
    }, [] as any)

    return <header className="header">
        <Logo image={imageFields} />
        <Select
            options={options}
            defaultValue={options.find((option: any) => option.value === lang)}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: '#bafabb',
                    primary: '#30b982',
                    neutral10: '#bafabb'
                },
            })}
            classNames={{
                control: (state) =>
                    state.isFocused ? 'select-active' : 'select',
                option: (state) => state.isFocused ? 'option-active' : 'option'
            }}
            onChange={(option: any) => {
                const { value } = option;

                router.replace(value);
            }}
        />
    </header>

}

export default Header;