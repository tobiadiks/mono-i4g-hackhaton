import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import Image from 'next/image'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Yaft</title>
        <meta
          name="Description"
          content="Experience a fresh way to track your Income and Expense."
        />
        <meta property="og:image" content={<Image alt='yaft' src={'/yaft.png'} width="64" height="64" />} />

        <meta property="og:title" content="Yaft" />

        <meta
          property="og:description"
          content="Experience a fresh way to track your Income and Expense."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
