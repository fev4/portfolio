import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered'
import Icon from '../src/Icon'
import FontAwesome from '../src/FontAwesome'

FontAwesome;

storiesOf('Icon', module)
  .addDecorator(centered)
  .add('start', () => (
    <Icon iconprefix="fas" iconname="balance-scale"></Icon>
  ))