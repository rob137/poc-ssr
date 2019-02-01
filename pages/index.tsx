import Layout from '../components/Layout';
import MapView from '../components/MapView';
import SidePanel from '../components/SidePanel';
import '../static/Index.scss';

const style = {
  height: '100%',
  width: '100%'
};

export default () => (
  <div style={style}>
    <Layout>
      <MapView />
      <SidePanel />
    </Layout>
  </div>
)
