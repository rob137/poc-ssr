import { Component } from 'react';
import dynamic from 'next/dynamic';
import '../static/MapView.scss';
import Head from 'next/head';
import classnames from "classnames";

// @ts-ignore
const LeafletMap = dynamic(() => import('react-leaflet').then(module => {
  const { Map } = module;
  return Map;
}), {
  ssr: false,
});

// @ts-ignore
const TileLayer = dynamic(() => import('react-leaflet').then(module => {
  const { TileLayer } = module;
  return TileLayer;
}), {
  ssr: false,
});

// @ts-ignore
const FeatureGroup = dynamic(() => import('react-leaflet').then(module => {
  const { FeatureGroup } = module;
  return FeatureGroup;
}), {
  ssr: false,
});

// @ts-ignore
const Polyline = dynamic(() => import('react-leaflet').then(module => {
  const { Polyline } = module;
  return Polyline;
}), {
  ssr: false,
});

// @ts-ignore
const EditControl = dynamic(() => import('react-leaflet-draw').then(module => {
  const { EditControl } = module;
  return EditControl;
}), {
  ssr: false,
});

// @ts-ignore
const ZoomControl = dynamic(() => import('react-leaflet').then(module => {
  const { ZoomControl } = module;
  return ZoomControl;
}), {
  ssr: false,
});

export default class MapView extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      featureCollection: [],
      satellite: false,
    }
  }

  generateData() {
    new Promise((resolve) => {
      const line = [];
      for (let i = 0; i < 10; i++) {
        // @ts-ignore
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

  setFeatureCollection(featureCollection: any) {
    this.setState({ featureCollection: featureCollection });
  }

  drawLines(featureCollection: any) {
    return featureCollection.map((collection: any) => {
      return (<Polyline key={Math.random()} color={'maroon'} positions={collection._latlngs} />);
    });
  }

    // i.e. Satellite vs Map views
    toggleSatellite(satellite: any) {
      this.setState({ satellite: !satellite });
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
    const mapBoxAPIURL = this.state.satellite ?
      'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' :
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.MAPBOX}`;
    const attribution = `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>
    contributors,<a href=https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
    <a href="https://www.mapbox.com/">Mapbox</a>`;

    return (
      <div className="MapView">
        <Head>
          <link rel="stylesheet" href="../static/leaflet_1.3.1.css" />
          <link rel="stylesheet" href="../static/leaflet-draw/leaflet.draw.css" />
          <script src="../static/leaflet.1.4.0.js"></script>
        </Head>
        <LeafletMap
          className={"MapView_map"}
          zoom={16}
          center={[51.74815077681456, -1.2823574152093544]}
          zoomControl={false}
          preferCanvas={true}
          maxZoom={25}
        >
          <TileLayer
            url={mapBoxAPIURL}
            id={'mapbox.streets'}
            attribution={attribution}
            accessToken={process.env.MAPBOX}
            maxNativeZoom={25}
          />
          <ZoomControl position="topright" />
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={drawControls}
            />
            {this.state.featureCollection.length > 0 && this.drawLines(this.state.featureCollection)}
          </FeatureGroup>
          <div className="customControls">
            <div className="customControls_control">
              <span
                className={classnames('icon-stack', 'customControls_control-inner')}
                onClick={() => this.toggleSatellite(this.state.satellite)}
              />
            </div>
            <div className="customControls_searchSet">
              <div
                className="customControls_control"
                // onClick={() => this.props.setShowSearchBox(!this.props.showSearchBox)}
              >
                <span 
                  className={
                    classnames('icon-search', 'customControls_control-inner', 'customControls_control-search')
                  }
                  />
              </div>
              {/* {this.props.showSearchBox &&
                <SearchBox
                  tripList={this.props.tripList}
                  fetchTrip={this.props.fetchTrip}
                />
              } */}
            </div>
          </div>
        </LeafletMap>
      </div>
    );
  }
}
