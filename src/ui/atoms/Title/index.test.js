// @flow

import React from 'react';

import Title from '.';

import { render } from 'utils/testing';

describe('atoms/Title', () => {
  it('matches its base snapshot', () => {
    const { baseElement } = render(<Title />);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders Title atom', () => {
    const { getByTestId } = render(<Title />);
    expect(getByTestId('atom-title')).toBeInTheDocument();
  });
});
