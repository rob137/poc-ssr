import Layout from '../components/Layout';
import MapView from '../components/MapView';

const style = {
  height: '100%',
  width: '100%'
};

export default () => (
  <div style={style}>
    <Layout>
      <MapView />
    </Layout>
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
      #__next > div > div {
        height: 100%;
        width: 100%;
      }

      // icomoon fonts
      @import 'static/fonts/style.css';
    `}</style>
  </div>
)
