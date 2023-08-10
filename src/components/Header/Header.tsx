"use client"
import { IBlock, IBlockFields, IImageFields, IPage, IPageFields, IText, ITextFields } from "@/__generated/contentful";
import { FC } from "react";
import './Header.scss'
import CustomImage from "../shared/CustomImage";
import Select from 'react-select'
import { usePathname, useRouter } from "next/navigation";

const LANG_PROP = 'lang';

interface HeaderInterface {
    header: IPageFields['header'];
}

const Header: FC<HeaderInterface> = ({
    header,
}) => {
    const router = useRouter();

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
        <CustomImage
            className="logo"
            media={imageFields?.media}
            width={70}
            height={70}
        />
        <Select
            options={options}
            defaultValue={options.find((option: any) => option.value === localStorage.getItem(LANG_PROP))}
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
                localStorage.setItem(LANG_PROP, value)

                router.replace(value);
            }}
        />
    </header>

}

export default Header;