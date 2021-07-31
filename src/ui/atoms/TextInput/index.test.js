// @flow

import React from 'react';

import TextInput from '.';

import { render } from 'utils/testing';

describe('atoms/TextInput', () => {
  it('matches its base snapshot', () => {
    const { baseElement } = render(<TextInput />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('renders TextInput atom', () => {
    const { getByTestId } = render(<TextInput />);
    expect(getByTestId('atom-text-input')).toBeInTheDocument();
  });
});
