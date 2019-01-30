import Header from './Header';
import Head from 'next/head';

const tempStyles = {
  top: '50px',
  backgroundColor: 'red',
  height: 'calc(100% - 50px)',
  width: '100%'
};

const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
      <script src="../dist/react-leaflet.min.js"></script>
    </Head>
    <Header />
    <div style={tempStyles}/>
    <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    // expanding all elements from html down to next.js jsx wrapper
    html, body, #__next, #__next div {
      width: 100%;
      height: 100%;
    }

    `}</style>
  </div>
);

export default Layout;
