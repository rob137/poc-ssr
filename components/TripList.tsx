import * as React from 'react';
import { Component } from 'react';
import { RequestBody, Trip } from './MapView';
import '../static/TripList.scss';

interface TripListProps {
  tripList: Trip[];
  fetchTrip: (body: RequestBody) => void;
}

// Currently the /trips endpoint returns date suffixed with "+01:00".
// But /telemetry/rangewithres doesn't accept this format in fetch request bodies.
// So a sloppy formatting fix for now - Ryan will sort out the +01:00 issue later.
// Function takes "2018-10-04 18:00:00+01:00" and returns "2018-10-04 19:00:00".
const incrementTime = (date: string) => {
  const hour = date.slice(11, 13);
  const newHour = Number(hour) + 1;
  return date.slice(0, 11) + newHour + date.slice(13, 19);
};

export const formatDate = (date: string) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const time = date.slice(11, 16);
  return `${day}.${month}.${year} ${time}:00`;
};

export default class TripList extends Component<TripListProps, {}> {
  render() {
    return (
      <div className="TripList">
        <ul className="TripList_list">
          {this.props.tripList.map((trip: Trip) => {
            const reqBody = {
              vehicle: 'fv1',
              sensor: 'gps',
              interval: '30sec',
              start_time: formatDate(incrementTime(trip.start_time)),
              end_time: formatDate(incrementTime(trip.end_time)),
            };
            return (
              <li
                className="TripList_list_item"
                onClick={() => this.props.fetchTrip(reqBody)}
              >
                <a
                  className="TripList_list_item_link"
                >
                  {`Vehicle ${trip.trip_id}`}<br />
                  {`Start: ${new Date(trip.start_time).toLocaleString()}`}<br />
                  {`End: ${new Date(trip.end_time).toLocaleString()}`}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
