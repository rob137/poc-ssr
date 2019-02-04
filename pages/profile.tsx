import * as React from 'react';
import Layout from '../components/Layout';
import { Component } from 'react';
import '../static/profile.scss';

export default class ProfilePage extends Component<{}, {}> {
  render() {
    return (
      <Layout location="Profile">
        <div className="ProfilePage">
          [...]
        </div>
      </Layout>
    );
  }
}
