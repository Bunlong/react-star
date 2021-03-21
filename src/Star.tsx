import React from 'react';
import StarIcon from './StarIcon';
import { calculateTotalIcons } from './utils';
import { ThinStar, FatStar } from './stars';
import {
  DEFAULT_MIN,
  DEFAULT_MAX,
  DEFAULT_STEP,
  DEFAULT_READONLY,
  DEFAULT_QUIET,
  DEFAULT_FRACTION,
  NO_OPERATION,
  DEFAULT_OTHER,
} from './models';
import { emptyIconStyle, iconStyle } from './styles';

interface Props {
  id?: number;
  className?: any;
  style?: any;
  tabIndex?: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  placeholderRating?: number;
  readOnly?: boolean;
  quiet?: boolean;
  fraction?: number;
  emptyIcon?: (string | object | JSX.Element)[] | string | object | JSX.Element;
  icon?: (string | object | JSX.Element)[] | string | object | JSX.Element;
  placeholderIcon?:
    | (string | object | JSX.Element)[]
    | string
    | object
    | JSX.Element;
  onHover: (index?: number, event?: any) => void;
  onClick: (index?: number, event?: any) => void;
  onChange: (index?: number, event?: any) => void;
  shape: 'thin' | 'fat';
}

interface State {
  value: number;
}

class Star extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    defaultValue: DEFAULT_OTHER,
    min: DEFAULT_MIN,
    max: DEFAULT_MAX,
    step: DEFAULT_STEP,
    readOnly: DEFAULT_READONLY,
    fraction: DEFAULT_FRACTION,
    quiet: DEFAULT_QUIET,
    onHover: NO_OPERATION,
    onClick: NO_OPERATION,
    onChange: NO_OPERATION,
  };

  state = { value: this.props.defaultValue } as State;

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  tranlateValueToDisplayValue(value: number) {
    if (value === undefined) {
      return 0;
    }
    const { min, step } = this.props;
    if (min && step) {
      return (value - min) / step;
    }
    return value;
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.defaultValue !== prevState.defaultValue) {
      return {
        defaultValue: nextProps.defaultValue,
        value: nextProps.defaultValue,
      };
    }
    return null;
  }

  handleClick(value?: number) {
    let newValue = this.translateDisplayValueToValue(value || DEFAULT_OTHER);
    if (newValue === this.state.value) {
      newValue = 0;
    }
    this.props.onClick(newValue);
    if (this.state.value !== newValue) {
      this.setState(
        {
          value: newValue,
        },
        () => this.props.onChange(this.state.value),
      );
    }
  }

  handleHover(displayValue?: number) {
    const value =
      displayValue === undefined
        ? displayValue
        : this.translateDisplayValueToValue(displayValue);
    this.props.onHover(value);
  }

  translateDisplayValueToValue(displayValue: number) {
    let translatedValue = 0;
    const { min, step, fraction } = this.props;
    translatedValue =
      displayValue * (step || DEFAULT_STEP) + (min || DEFAULT_MIN);
    // minimum value cannot be equal to start, since it's exclusive
    return translatedValue === min
      ? translatedValue + 1 / (fraction || DEFAULT_FRACTION)
      : translatedValue;
  }

  renderEmptyIcon() {
    const { shape, emptyIcon } = this.props;
    if (!emptyIcon) {
      return shape === 'fat' ? (
        <FatStar style={emptyIconStyle} />
      ) : (
        <ThinStar style={emptyIconStyle} />
      );
    }
    return emptyIcon;
  }

  renderIcon() {
    const { shape, icon } = this.props;
    if (!icon) {
      return shape === 'fat' ? (
        <FatStar style={iconStyle} />
      ) : (
        <ThinStar style={iconStyle} />
      );
    }
    return icon;
  }

  renderPlaceholderIcon() {
    const { shape, placeholderIcon } = this.props;
    if (!placeholderIcon) {
      return shape === 'fat' ? (
        <FatStar style={iconStyle} />
      ) : (
        <ThinStar style={iconStyle} />
      );
    }
    return placeholderIcon;
  }

  render() {
    const {
      step,
      readOnly,
      quiet,
      fraction,
      min,
      max,
      id,
      className,
      style,
      tabIndex,
    } = this.props;

    return (
      <StarIcon
        id={id || DEFAULT_OTHER}
        style={style}
        className={className}
        tabIndex={tabIndex || DEFAULT_OTHER}
        // aria-label={this.props['aria-label']}
        totalIcons={calculateTotalIcons(
          min || DEFAULT_MIN,
          max || DEFAULT_MAX,
          step || DEFAULT_STEP,
        )}
        value={this.tranlateValueToDisplayValue(this.state.value)}
        placeholderValue={this.tranlateValueToDisplayValue(
          this.props.placeholderRating || DEFAULT_OTHER,
        )}
        readOnly={readOnly || DEFAULT_READONLY}
        quiet={quiet || DEFAULT_QUIET}
        fraction={fraction || DEFAULT_FRACTION}
        emptyIcon={this.renderEmptyIcon()}
        icon={this.renderIcon()}
        placeholderIcon={this.renderPlaceholderIcon}
        onClick={this.handleClick}
        onHover={this.handleHover}
      />
    );
  }
}

export default Star;

// UNSAFE_componentWillReceiveProps(nextProps: any) {
//   if (this.props.defaultValue !== nextProps.defaultValue) {
//     this.setState(() => ({
//       value: nextProps.defaultValue,
//     }));
//   }
// }
