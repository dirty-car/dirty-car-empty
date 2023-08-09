import Image from 'next/image'
// import styles from './page.module.css'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { AppProps } from 'next/app';
import { getPage } from '@/lib/contentful/pages';
import { IBlock, IPage, IPageFields, ISectionFields } from '@/__generated/contentful';
import { getSection } from '@/components';
import { Header } from '@/components/Header';



export default async function Home({params}: any) {
  console.log(params, 'props');
  
  const pageFields = await getPage(params.lang) as IPageFields;
  // console.log(pageFields, 'props');
  const sections = pageFields?.sections;
  // console.log(sections);

  // const { components } = sections.fields || {} as Array<any>
  // console.log(components);


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
