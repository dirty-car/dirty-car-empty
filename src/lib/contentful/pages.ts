import { cache } from 'react'
import { client } from '@/lib/contentful';
import { IPage } from '@/__generated/contentful';

export const getPage = cache(async (locale: 'zh' | 'ru' = 'ru') => {
    try {
        const resp = await client.getEntries({ content_type: 'page', limit: 1, 'fields.slug': '/', include: 10, locale });
        const page = resp.items[0] as IPage;

        return page.fields;
    } catch (e) {
        console.error(e)

        return null;
    }
})