import { Component } from 'react';
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('react-leaflet').then(module => {
  const { Map } = module;
  return Map;
}), {
  ssr: false,
});

const TileLayer = dynamic(() => import('react-leaflet').then(module => {
  const { TileLayer } = module;
  return TileLayer;
}), {
  ssr: false,
});

const FeatureGroup = dynamic(() => import('react-leaflet').then(module => {
  const { FeatureGroup } = module;
  return FeatureGroup;
}), {
  ssr: false,
});

const Polyline = dynamic(() => import('react-leaflet').then(module => {
  const { Polyline } = module;
  return Polyline;
}), {
  ssr: false,
});

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureCollection: [],
    }
  }

  generateData() {
    new Promise((resolve, reject) => {
      const line = [];
      for (let i = 0; i < 10000; i++) {
        line.push(L.latLng((Math.random() / 1000) + 51.747, (Math.random() / 1000) - 1.282868));
      }
      resolve(line);
    })
    .then((line) => {
      return[{
        _latlngs: line,
        editing: {
          latlngs: [line],
        },
      }];
    })
    .then((featureCollection) => {
      this.setFeatureCollection(featureCollection);
    })
    .catch((err) => console.error(err));
  }

  setFeatureCollection(featureCollection) {
    this.setState({ featureCollection: featureCollection });
  }

  drawLines(featureCollection) {
    return featureCollection.map((collection) => {
      return (<Polyline key={Math.random()} color={'maroon'} positions={collection._latlngs} />);
    });
  }

  componentDidMount() {
    this.generateData();
  }

  render() {
    return (
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
          <FeatureGroup>
            {this.state.featureCollection.length > 0 && this.drawLines(this.state.featureCollection)}
          </FeatureGroup>
        </LeafletMap>
      </div>
    );
  }
}
