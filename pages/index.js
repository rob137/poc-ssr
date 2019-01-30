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
  </div>
)
