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

const MapView = (props) => (
  <div>
    <LeafletMap
      id='mapid'
      zoom={16}
      center={[51.74815077681456, -1.2823574152093544]}
      style={{ height: 'calc(100% - 50px)' }}
    >
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
    </LeafletMap>
  </div>
);

export default MapView;
