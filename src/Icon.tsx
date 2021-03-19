import React, { CSSProperties } from 'react';
import { renderIcon } from './utils';

interface Props {
  index: number;
  readOnly: boolean;
  emptyIcon: string | object | JSX.Element;
  icon: string | object | JSX.Element;
  percent: number;
  onClick?: (index: number, event: any) => void;
  onMouseMove?: (index: number, event: any) => void;
  onTouchEnd?: (index: number, event: any) => void;
  onTouchMove?: (index: number, event: any) => void;
}

class Icon extends React.PureComponent<Props> {
  render() {
    const {
      readOnly,
      onClick,
      index,
      onMouseMove,
      onTouchEnd,
      percent,
      emptyIcon,
      icon,
    } = this.props;
    const showbgIcon = percent < 100;
    const bgIconContainerStyle = showbgIcon
      ? {}
      : ({
          visibility: 'hidden',
        } as CSSProperties);
    const iconContainerStyle = {
      display: 'inline-block',
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      ['left']: 0,
      width: `${percent}%`,
    } as CSSProperties;
    const style = {
      cursor: !readOnly ? 'pointer' : 'inherit',
      display: 'inline-block',
      position: 'relative',
      marginLeft: 5,
    } as CSSProperties;

    function handleMouseClick(event: any) {
      if (onClick) {
        event.preventDefault();
        onClick(index, event);
      }
    }

    function handleMouseMove(event: any) {
      if (onMouseMove) {
        onMouseMove(index, event);
      }
    }

    function handleTouchEnd(event: any) {
      if (onTouchEnd) {
        onTouchEnd(index, event);
      }
    }

    return (
      <span
        style={
          index === 0 ? Object.assign({}, style, { marginLeft: 0 }) : style
        }
        onClick={handleMouseClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleTouchEnd}
      >
        <span style={bgIconContainerStyle}>{renderIcon(emptyIcon)}</span>
        <span style={iconContainerStyle}>{renderIcon(icon)}</span>
      </span>
    );
  }
}

export default Icon;
