// @flow

import React from 'react';

import Field from '.';

import { render } from 'utils/testing';

describe('molecules/Field', () => {
  it('matches its base snapshot', () => {
    const { baseElement } = render(<Field className="class-name" />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('renders Field molecule', () => {
    const { getByTestId } = render(<Field className="class-name" />);
    expect(getByTestId('molecule-field')).toBeInTheDocument();
  });

  it('should render with label', () => {
    const { getByText } = render(<Field className="class-name" label="Label here" />);
    expect(getByText('Label here')).toBeInTheDocument();
  });

  it('renders its children', () => {
    const { getByText } = render(
      <Field className="class-name">
        <p>Children here</p>
      </Field>
    );

    expect(getByText('Children here')).toBeInTheDocument();
  });
});
