// @flow

import React from 'react';

import Input from '../Input';

import Container from './Container';
import Reset from './Reset';

type Props = {
  dataTestId?: string,
  disabled?: boolean,
  onFocus?: () => void,
  onReset?: () => void,
  placeholder?: string,
  resetable?: boolean,
  small?: boolean,
  type?: 'password' | 'number' | 'text',
};

function TextInput(
  {
    dataTestId = 'atom-text-input',
    disabled = false,
    onReset,
    resetable = false,
    small = false,
    type = 'text',
    placeholder = '',
    ...rest
  }: Props,
  ref
) {
  return (
    <Container data-testid={dataTestId} disabled={disabled} small={small} type={type}>
      <Input
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        tabIndex={disabled ? -1 : 0}
        type={type}
        {...rest}
      />
      {resetable && <Reset disabled={disabled} onClick={!disabled ? onReset : undefined} />}
    </Container>
  );
}

// $FlowIssue
export default React.forwardRef(TextInput);
