import { getPage } from '@/lib/contentful/pages';
import type { IPageFields } from '@/__generated/contentful';
import { getSection } from '@/components';
import { Header } from '@/components/Header';
import getContentfulPage from './actions';



const Home = async (): Promise<any> => {
  const pageFields = await getContentfulPage() as IPageFields;
  const sections = pageFields?.sections;


  return (<>
    <Header header={pageFields.header} />
    <main >
      {sections?.map((section) => getSection(section))}
    </main>
  </>
  )
}

export default Home as any;
