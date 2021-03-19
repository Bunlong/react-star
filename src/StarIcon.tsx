import React from 'react';
import Icon from './Icon';

interface Props {
  id: number;
  style: any;
  className: any;
  tabIndex: number;
  totalIcons: number;
  value: number;
  placeholderValue: number;
  readOnly: boolean;
  quiet: boolean;
  fraction: number;
  emptyIcon: (string | object | JSX.Element)[] | string | object | JSX.Element;
  icon: (string | object | JSX.Element)[] | string | object | JSX.Element;
  placeholderIcon:
    | (string | object | JSX.Element)[]
    | string
    | object
    | JSX.Element;
  onClick: (index: number, event: any) => void;
  onHover: (index?: number, event?: any) => void;
}

interface State {
  displayValue: number;
  interacting: boolean;
}

class StarIcon extends React.PureComponent<Props, State> {
  state = {
    displayValue: this.props.value,
    interacting: false,
  } as State;

  constructor(props: any) {
    super(props);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.iconClick = this.iconClick.bind(this);
    this.iconMouseMove = this.iconMouseMove.bind(this);
    this.iconEnd = this.iconEnd.bind(this);
  }

  onMouseLeave() {
    this.setState({
      displayValue: this.props.value,
      interacting: false,
    });
  }

  calculateHoverPercentage(event: any) {
    const clientX =
      event.nativeEvent.type.indexOf('touch') > -1
        ? event.nativeEvent.type.indexOf('touchend') > -1
          ? event.changedTouches[0].clientX
          : event.touches[0].clientX
        : event.clientX;
    const targetRect = event.target.getBoundingClientRect();
    const delta = clientX - targetRect.left;
    return delta < 0 ? 0 : delta / targetRect.width;
  }

  calculateDisplayValue(iconIndex: number, event: any) {
    const percentage = this.calculateHoverPercentage(event);
    const fraction =
      Math.ceil((percentage % 1) * this.props.fraction) / this.props.fraction;
    const precision = 10 ** 3;
    const displayValue =
      iconIndex +
      (Math.floor(percentage) + Math.floor(fraction * precision) / precision);
    return displayValue > 0
      ? displayValue > this.props.totalIcons
        ? this.props.totalIcons
        : displayValue
      : 1 / this.props.fraction;
  }

  iconClick(iconIndex: number, event: any) {
    const value = this.calculateDisplayValue(iconIndex, event);
    this.props.onClick(value, event);
  }

  iconMouseMove(iconIndex: number, event: any) {
    const value = this.calculateDisplayValue(iconIndex, event);
    this.setState({
      interacting: !this.props.readOnly,
      displayValue: value,
    });
  }

  iconEnd(iconIndex: number, event: any) {
    if (!this.props.quiet) {
      this.iconClick(iconIndex, event);
      event.preventDefault();
    }
    this.onMouseLeave();
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    const valueChanged = this.props.value !== nextProps.value;
    this.setState((prevState) => ({
      displayValue: valueChanged ? nextProps.value : prevState.displayValue,
    }));
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.interacting && !this.state.interacting) {
      return this.props.onHover();
    }

    if (this.state.interacting && prevProps.value == this.props.value) {
      this.props.onHover(this.state.displayValue);
    }
  }

  render() {
    const {
      id,
      style,
      className,
      tabIndex,
      readOnly,
      totalIcons,
      emptyIcon,
      placeholderValue,
      value,
      placeholderIcon,
      icon,
      quiet,
    } = this.props;
    const { interacting, displayValue } = this.state;
    const icons = [] as any;
    const empty = [].concat(emptyIcon as any);
    const shouldDisplayPlaceholder =
      placeholderValue !== 0 && value === 0 && !interacting;
    const placeholder = [].concat(placeholderIcon as any);
    const full = [].concat(icon as any);

    let renderedValue;
    if (shouldDisplayPlaceholder) {
      renderedValue = placeholderValue;
    } else {
      renderedValue = quiet ? value : displayValue;
    }

    const flooredRenderedValue = Math.floor(renderedValue);

    for (let i = 0; i < totalIcons; i++) {
      let percent;
      if (i - flooredRenderedValue < 0) {
        percent = 100;
      } else if (i - flooredRenderedValue === 0) {
        percent = (renderedValue - i) * 100;
      } else {
        percent = 0;
      }
      icons.push(
        <Icon
          key={i}
          index={i}
          readOnly={readOnly}
          emptyIcon={empty[i % empty.length]}
          icon={
            shouldDisplayPlaceholder
              ? placeholder[i % full.length]
              : full[i % full.length]
          }
          percent={percent}
          {...(!readOnly && {
            onClick: this.iconClick,
            onMouseMove: this.iconMouseMove,
            onTouchMove: this.iconMouseMove,
            onTouchEnd: this.iconEnd,
          })}
        />,
      );
    }

    return (
      <span
        id={`${id}`}
        style={{
          ...style,
          display: 'inline-block',
          outline: 'none',
        }}
        className={className}
        tabIndex={tabIndex}
        // aria-label={this.props['aria-label']}
        {...(!readOnly && {
          onMouseLeave: this.onMouseLeave,
        })}
      >
        {icons}
      </span>
    );
  }
}

export default StarIcon;
