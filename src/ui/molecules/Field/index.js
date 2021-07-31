// @flow

import { rem } from 'polished';
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';

import Label from '../../atoms/Label';

type Props = {
  children?: Node,
  className: string,
  dataTestId?: string,
  info?: Node,
  labelFor?: string,
  label?: string,
};

const Container = ({ children, className, dataTestId = 'molecule-field', info, label, labelFor }: Props) => (
  <div className={className} data-testid={dataTestId}>
    {info && info}
    {label && <Label htmlFor={labelFor}>{label}</Label>}
    {children}
  </div>
);

const Field = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => rem(theme.spacing.md)};
  width: 100%;

  ${({ label, theme }) =>
    !label &&
    css`
      padding-left: ${rem(140 + theme.spacing.md)};
    `};

  /* stylelint-disable-next-line */
  ${Label} {
    flex-shrink: 0;
    margin-right: ${({ theme }) => rem(theme.spacing.md)};
    min-width: ${({ info }) => (info ? rem(125) : rem(140))};
    max-width: ${({ info }) => (info ? rem(125) : rem(140))};
  }

  ${({ stacked }) =>
    stacked &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      width: ${rem(400)};

      /* stylelint-disable-next-line */
      ${Label} {
        align-self: flex-start;
        margin-bottom: ${({ theme }) => rem(theme.spacing.xs)};
        width: auto;
      }
    `};
`;

Field.displayName = 'Field';
export default Field;
