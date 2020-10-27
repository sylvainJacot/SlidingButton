import Head from 'next/head';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Button sliding</title>
      </Head>
      <Layout>
     <HomePage/>
      </Layout>

     
    </>
  )
}
