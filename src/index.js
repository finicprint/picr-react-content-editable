import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './PicrContentEditable.css';

export default class PicrContentEditable extends Component {
  static propTypes = {
    className: PropTypes.string,
    fieldClassName: PropTypes.string,
    customElement: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    type: PropTypes.oneOf(['input', 'textarea']),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    customElement: null,
    fieldClassName: '',
    type: 'input',
  };

  render() {
    const { className, fieldClassName, value, onChange, type, customElement, ...restProps } = this.props;
    const Field = customElement || type;
    return (
      <div className={cn(className, style.container)}>
        <Field
          {...restProps}
          ref={(node) => { this.input = node; }}
          className={cn(fieldClassName, style.field)}
          onChange={onChange}
          value={value || ''}
        />
        <span className={style.text}>{value}&nbsp;</span>
      </div>
    );
  }
}
