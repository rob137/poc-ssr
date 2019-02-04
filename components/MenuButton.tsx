import * as React from 'react';
import { Component } from 'react';
import Link from 'next/link';
import '../static/MenuButton.scss';
import classnames from 'classnames';

interface MenuButtonProps {
  title: string;
  selected: boolean;
}

interface IconDict {
  [key: string]: string;
}

export default class MenuButton extends Component<MenuButtonProps, {}> {
  render() {
    const iconDict: IconDict = {
      'Map': 'icon-location',
      'Vehicles': 'icon-truck',
      'Projects': 'icon-pencil',
      'Profile': 'icon-user',
    };
    const title = this.props.title === 'Map' ? '' : this.props.title.toLowerCase();
    return (
      <Link
        href={`/${title}`}
      >
        <button className={classnames(
          'MenuButton', { 'MenuButton-selected': this.props.selected },
        )}>
          <span className="MenuButton-innerWrapper">
            <span className={classnames(iconDict[this.props.title], 'MenuButton-innerWrapper-icon')} />
            <span className={'MenuButton-innerWrapper-title'}>{this.props.title}</span>
          </span>
        </button>
      </Link>
    );
  }
}
