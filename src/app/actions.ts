'use server'
import { revalidatePath } from 'next/cache'
import { IPageFields } from "@/__generated/contentful";
import { getPage } from "@/lib/contentful/pages"

export default async function getContentfulPage(locale?: 'zh' | 'ru') {
    const page = await getPage(locale) as IPageFields;

    if (locale) {
        revalidatePath(locale);
    } else {
        revalidatePath('/');
    }


    return page;
}