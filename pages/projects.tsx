import * as React from 'react';
import Layout from '../components/Layout';
import { Component } from 'react';
import '../static/projects.scss';

export default class ProjectsPage extends Component<{}, {}> {
  render() {
    return (
      <Layout location='Projects'>
        <div className="ProjectsPage">
          [...]
        </div>
      </Layout>
    );
  }
}
