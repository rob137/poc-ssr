import Layout from '../components/Layout';
import Head from 'next/head';

const style = {
  height: '100%',
  width: '100%'
};

export default () => (
  <div style={style}>
    <Head>
      <link rel="stylesheet" href="../static/leaflet_1.3.1.css" />
    </Head>
    <Layout />
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
      }
      // expanding all elements from html down to next.js jsx wrapper
      html,
      body,
      #__next,
      #__next > div,
      #__next > div > div,
      #__next > div > div > div {
        height: 100%;
        width: 100%;
      }
    `}</style>
  </div>
)
