import { getPage } from '@/lib/contentful/pages';
import type { IPageFields } from '@/__generated/contentful';
import { getSection } from '@/components';
import { Header } from '@/components/Header';



const Home = async (): Promise<any> => {
  const pageFields = await getPage('ru') as IPageFields;
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
