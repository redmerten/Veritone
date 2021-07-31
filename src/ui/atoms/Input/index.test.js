// @flow

import React from 'react';

import Input from '.';

import { render } from 'utils/testing';

describe('atoms/Input', () => {
  it('matches its base snapshot', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders input atom', () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId('atom-input')).toBeInTheDocument();
  });
});
