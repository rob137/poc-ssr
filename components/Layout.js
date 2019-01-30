import Header from './Header';
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('react-leaflet').then(module => {
  const { Map } = module;
  return Map;
}), {
  ssr: false,
})

const TileLayer = dynamic(() => import('react-leaflet').then(module => {
  const { TileLayer } = module;
  return TileLayer;
}), {
  ssr: false,
})

const Layout = (props) => (
  <div>
    <Header />
    <LeafletMap
      id='mapid'
      zoom={16}
      center={[51.74815077681456, -1.2823574152093544]}
    >
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
    </LeafletMap>
    <style jsx global>{`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
    }
    // expanding all elements from html down to next.js jsx wrapper
    html, body {
      width: 100%;
      height: 100%;
    }
    #__next, #__next > div, #__next> div> div {
      height: 100%;
      width: 100%;
    }
    #mapid {
      height: calc(100% - 50px);
    }
    `}</style>
  </div>
);

export default Layout;
