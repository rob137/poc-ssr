import Layout from '../components/Layout';
import MapView from '../components/MapView';
import '../static/Index.scss';

export default () => (
  <Layout location='Map' showSidepanel={true}>
    <MapView />
  </Layout>
)
