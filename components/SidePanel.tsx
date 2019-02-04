import * as React from 'react';
import MenuButton from './MenuButton';
import '../static/SidePanel.scss';
import classnames from 'classnames';

interface SidePanelProps {
  location: string;
  show: boolean;
  toggleSidePanel: (show: boolean) => void;
}

const SidePanel = (props: SidePanelProps) => {
  const menuTitles = ['Map', 'Vehicles', 'Projects', 'Profile'];
  const toggleIcon = props.show ? '<' : '>';
  return (
    <div className="SidePanel">
      <div className={classnames('SidePanel_main', { 'SidePanel_main-show': props.show })}>
      {props.show && menuTitles.map((title, key) => {
        return <MenuButton
            selected={title === props.location}
            title={title}
            key={key}
          />;
      })}
      </div>
      <div
        className={classnames(
          'SidePanel_toggle', { 'SidePanel_toggle-hidden': !props.show },
        )}
        onClick={() => props.toggleSidePanel(props.show)}
      >
        {toggleIcon}
      </div>
    </div>
  );
}

export default SidePanel;
