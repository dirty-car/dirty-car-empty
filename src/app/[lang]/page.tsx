import { IPageFields } from '@/__generated/contentful';
import { getSection } from '@/components';
import { Header } from '@/components/Header';
import getContentfulPage from '../actions';



export default async function Home({ params }: any) {
  const pageFields = await getContentfulPage(params.lang) as IPageFields;
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
