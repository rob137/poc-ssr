import * as React from 'react';
import { Component } from 'react';
import Layout from '../components/Layout';
import SidePanel from '../components/SidePanel';
import '../static/vehicles.scss';
import Link from 'next/link';

export interface Vehicle {
  'name': string;
  'lastTasked': string;
  'lastTaskId': number;
  'status': string;
  'position': string;
  'image': string;
  'fuel': number;
  'rpm': number;
}

export default class VehiclesPage extends Component<{}, {}> {
  render() {
    const data = require('../static/vehicles-data.json');
    return (
      <Layout>
        <SidePanel />
        <div className="VehiclesPage">
          <div className="VehiclesPage_inner">
            {data.map((vehicle: Vehicle, key: number) => {
              return (
                <div className="VehiclesPage_inner_vehicle" key={key}>
                  <img
                    className="VehiclesPage_inner_vehicle_image"
                    src={`../static/images/${vehicle.image}`}
                  />
                  <Link href="/">
                    <div className="VehiclesPage_inner_vehicle_info">
                      <span className="VehiclesPage_inner_vehicle_info_text">
                        {vehicle.name}
                      </span>
                      <span className="VehiclesPage_inner_vehicle_info_text">
                        {vehicle.status}
                      </span>
                      <span className="VehiclesPage_inner_vehicle_info_text">
                        {vehicle.fuel}% fuel remaining
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
