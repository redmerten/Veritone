// @flow

import { storiesOf } from '@storybook/react';
import React from 'react';

import Label from '.';

storiesOf('Atoms/Label (form)', module).add('default', () => <Label htmlFor="name">Name</Label>);
