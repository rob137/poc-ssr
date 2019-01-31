import * as React from 'react';
import { Component } from 'react';
import TripList from './TripList';
import '../static/SearchBox.scss';
import { RequestBody, Trip } from './MapView';

interface SearchBoxProps {
  tripList: Trip[];
  fetchTrip: (body: RequestBody) => void;
}

export default class SearchBox extends Component<SearchBoxProps, {}> {
  render() {
    return (
      <div className={'SearchBox'}>
        <TripList tripList={this.props.tripList} fetchTrip={this.props.fetchTrip} />
      </div>
    );
  }
}
