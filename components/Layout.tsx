import TitleBar from './TitleBar';
import SidePanel from '../components/SidePanel';
import { Component } from 'react';

interface LayoutProps {
  location: string;
  children: any;
}

interface LayoutState {
  showSidepanel: boolean;
}

export default class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      showSidepanel: false,
    }
  }

  toggleSidePanel(show: boolean) {
    this.setState({
      showSidepanel: !show,
    })
  }

  render() {
    return (
      <div>
        <TitleBar />
        <SidePanel
          location={this.props.location}
          show={this.state.showSidepanel}
          toggleSidePanel={this.toggleSidePanel.bind(this)}
        />
        {this.props.children}
      </div>
    )
  }
}
