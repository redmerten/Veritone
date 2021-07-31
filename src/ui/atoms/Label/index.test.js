// @flow

import React from 'react';

import Label from '.';

import { render } from 'utils/testing';

describe('atoms/Label', () => {
  it('matches its base snapshot', () => {
    const { baseElement } = render(<Label />);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders label atom', () => {
    const { getByTestId } = render(<Label />);
    expect(getByTestId('atom-label')).toBeInTheDocument();
  });
});
