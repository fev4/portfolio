import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../src/Icon'
import FontAwesome from '../src/FontAwesome'

FontAwesome;

storiesOf('Icon', module)
  .add('start', () => (
    <Icon iconprefix="fas" iconname="balance-scale"></Icon>
  ))