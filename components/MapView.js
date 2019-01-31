import { Component } from 'react';
import dynamic from 'next/dynamic'
import Head from 'next/head';

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

const EditControl = dynamic(() => import('react-leaflet-draw').then(module => {
  const { EditControl } = module;
  return EditControl;
}), {
  ssr: false,
});

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureCollection: [],
      api: `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.MAPBOX}`,
    }
  }

  generateData() {
    new Promise((resolve, reject) => {
      const line = [];
      for (let i = 0; i < 10; i++) {
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
    const drawControls = {
      polyline: true,
      circle: false,
      rectangle: false,
      marker: false,
      polygon: false,
      circlemarker: false,
    };

    return (
      <div>
        <Head>
          <link rel="stylesheet" href="../static/leaflet_1.3.1.css" />
          <link rel="stylesheet" href="../static/leaflet-draw/leaflet.draw.css" />
          <script src="../static/leaflet.1.4.0.js"></script>
        </Head>
        <LeafletMap
          id='mapid'
          zoom={16}
          center={[51.74815077681456, -1.2823574152093544]}
          style={{ height: 'calc(100% - 50px)' }}
        >
          <TileLayer
            url={this.state.api}
            id={'mapbox.streets'}
          />
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={drawControls}
            />
            {this.state.featureCollection.length > 0 && this.drawLines(this.state.featureCollection)}
          </FeatureGroup>
        </LeafletMap>
      </div>
    );
  }
}
