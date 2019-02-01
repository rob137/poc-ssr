import * as React from 'react';
import { Component } from 'react';
import MenuButton from './MenuButton';
import '../static/SidePanel.scss';
import classnames from 'classnames';

interface SidePanelState {
  selection: string;
  show: boolean;
}

export default class SidePanel extends Component<{}, SidePanelState> {
  constructor() {
    super({});
    this.state = {
      selection: 'Map',
      show: false,
    };
  }

  toggleSidePanel(current: boolean) {
    this.setState({ show: !current });
  }

  setSelection(title: string) {
    this.setState({ selection: title });
  }

  componentWillReceiveProps(props: any) {
    // get capitalised path e.g. /map => Map
    const title = props.location.pathname.charAt(1).toUpperCase() + props.location.pathname.slice(2);
    this.setSelection(title);
  }

  render() {
    const menuTitles = ['Map', 'Vehicles', 'Projects', 'Profile'];
    const toggleIcon = this.state.show ? '<' : '>';
    return (
      <div className="SidePanel">
        <div className={classnames('SidePanel_main', { 'SidePanel_main-show': this.state.show })}>
        {this.state.show && menuTitles.map((title, key) => {
          return <MenuButton
              selected={title === this.state.selection}
              title={title}
              key={key}
            />;
        })}
        </div>
        <div
          className={classnames(
            'SidePanel_toggle', { 'SidePanel_toggle-hidden': !this.state.show },
          )}
          onClick={() => this.toggleSidePanel(this.state.show)}
        >
          {toggleIcon}
        </div>
      </div>
    );
  }
}
