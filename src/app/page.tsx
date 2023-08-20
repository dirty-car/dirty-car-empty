import { getPage } from '@/lib/contentful/pages';
import type { IPageFields } from '@/__generated/contentful';
import { getSection } from '@/components';
import { Header } from '@/components/Header';



const Home = async (): Promise<any> => {
  const pageFields = await getPage('ru') as IPageFields;
  const sections = pageFields?.sections;
  // console.log(sections);

  // const { components } = sections.fields || {} as Array<any>
  // console.log(components);


  return (<>
    <Header header={pageFields.header} />
    <main >
      {sections?.map((section) => getSection(section))}
    </main>
  </>
  )
}
export default Home;
