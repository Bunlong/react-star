import React, { CSSProperties } from 'react';

interface Props {
  index: number;
  readonly: boolean;
  inactiveIcon: string | object | JSX.Element;
  activeIcon: string | object | JSX.Element;
  percent: number;
  direction: string;
  onClick?: (index: number, event: any) => void;
  onMouseMove?: (index: number, event: any) => void;
  onTouchEnd?: (index: number, event: any) => void;
  onTouchMove?: (index: number, event: any) => void;
}

const renderIcon = (icon: any) => {
  if (React.isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === 'object' && icon !== null) {
    return <span style={icon} />;
  }
  if (Object.prototype.toString.call(icon) === '[object String]') {
    return <span className={icon} />;
  }
  return null;
}

class Icon extends React.PureComponent<Props> {
  render() {
    const {
      readonly,
      onClick,
      index,
      onMouseMove,
      onTouchEnd,
      percent,
      inactiveIcon,
      direction,
      activeIcon,
    }  = this.props
    const backgroundIcon = renderIcon(inactiveIcon);
    const showbgIcon = percent < 100;
    const bgIconContainerStyle = showbgIcon
      ? {}
      : {
          visibility: 'hidden'
        } as CSSProperties;
    const icon = renderIcon(activeIcon);
    const iconContainerStyle = {
      display: 'inline-block',
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      [direction === 'rtl' ? 'right' : 'left']: 0,
      width: `${percent}%`
    } as CSSProperties;
    const style = {
      cursor: !readonly ? 'pointer' : 'inherit',
      display: 'inline-block',
      position: 'relative',
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

    return(
      <span
        style={style}
        onClick={handleMouseClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleTouchEnd}
      >
        <span style={bgIconContainerStyle}>
          {backgroundIcon}
        </span>
        <span style={iconContainerStyle}>
          {icon}
        </span>
      </span>
    )
  }
}

export default Icon;
