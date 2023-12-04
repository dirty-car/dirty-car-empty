import { IPageFields } from '@/__generated/contentful';
import { getSection } from '@/components';
import { Header } from '@/components/Header';
import { getPage } from '@/lib/contentful/pages';

export default async function Home({ params }: any) {
  const pageFields = await getPage(params.lang) as IPageFields;
  const sections = pageFields?.sections;

  return (<>
    <Header header={pageFields.header} />
    <main >
      <div>
      </div>
      {sections?.map((section) => getSection(section))}
    </main>
  </>
  )
}
