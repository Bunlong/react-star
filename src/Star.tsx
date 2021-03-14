import React, { CSSProperties } from 'react';
import StarIcon from './StarIcon';
import { calculateTotalIcons } from './utils';

const background = {
  borderRadius: '50%',
  border: '5px double white',
  display: 'inline-block',
  height: 30,
  width: 30,
} as CSSProperties;

const styles = {
  empty: {
    ...background,
    backgroundColor: '#ccc',
  } as CSSProperties,
  full: {
    ...background,
    backgroundColor: 'black',
  } as CSSProperties,
  placeholder: {
    ...background,
    backgroundColor: 'red',
  } as CSSProperties,
};

function star() {}
star._name = 'react_star';

interface Props {
  id?: number;
  className?: any;
  style?: any;
  tabIndex?: number;
  start?: number;
  stop?: number;
  step?: number;
  initialRating?: number;
  placeholderRating?: number;
  readonly?: boolean;
  quiet?: boolean;
  fractions?: number;
  direction?: string;
  emptyIcon?: (string | object | JSX.Element)[]| string | object | JSX.Element;
  fullIcon: (string | object | JSX.Element)[]| string | object | JSX.Element;
  placeholderIcon: (string | object | JSX.Element)[]| string | object | JSX.Element;
  onHover: (index?: number, event?: any) => void;
  onClick: (index?: number, event?: any) => void;
  onChange: (index?: number, event?: any) => void;
}

interface State {
  value: number;
}

class Star extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    start: 0,
    stop: 5,
    step: 1,
    readonly: false,
    quiet: false,
    fractions: 1,
    direction: 'ltr',
    onHover: star,
    onClick: star,
    onChange: star,
    emptyIcon: styles.empty,
    fullIcon: styles.full,
    placeholderIcon: styles.placeholder
  };

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  state = {
    value: this.props.initialRating
  } as State;

  tranlateValueToDisplayValue(value: number) {
    if (value === undefined) {
      return 0;
    }
    const {start, step} = this.props;
    if (start && step) {
      return (value - start) / step;
    }
    return value;
  }

  handleClick(value?: number) {
    const newValue = this.translateDisplayValueToValue(value || 0);
    this.props.onClick(newValue);
    if (this.state.value !== newValue) {
      this.setState({
        value: newValue
      }, () => this.props.onChange(this.state.value));
    }
  }

  handleHover(displayValue?: number) {
    const value = displayValue === undefined
      ? displayValue
      : this.translateDisplayValueToValue(displayValue);
    this.props.onHover(value);
  }

  translateDisplayValueToValue(displayValue: number) {
    let translatedValue = 0
    translatedValue = displayValue * (this.props.step || 0) + (this.props.start || 0);
    // minimum value cannot be equal to start, since it's exclusive
    return translatedValue === this.props.start
      ? translatedValue + 1 / (this.props.fractions || 0)
      : translatedValue;
  }

  render() {
    const {
      step,
      emptyIcon,
      fullIcon,
      placeholderIcon,
      readonly,
      quiet,
      fractions,
      direction,
      start,
      stop,
      id,
      className,
      style,
      tabIndex
    } = this.props;

    return (
      <StarIcon
        id={id || 0}
        style={style}
        className={className}
        tabIndex={tabIndex || 0}
        // aria-label={this.props['aria-label']}
        totalIcons={calculateTotalIcons(start || 0, stop || 0, step || 0)}
        value={this.tranlateValueToDisplayValue(this.state.value)}
        placeholderValue={this.tranlateValueToDisplayValue(this.props.placeholderRating || 0)}
        readonly={readonly || false}
        quiet={quiet || false}
        fractions={fractions || 0}
        direction={direction || ''}
        emptyIcon={emptyIcon || ''}
        fullIcon={fullIcon || ''}
        placeholderIcon={placeholderIcon || ''}
        onClick={this.handleClick}
        onHover={this.handleHover}
      />
    )
  }
}

export default Star;
