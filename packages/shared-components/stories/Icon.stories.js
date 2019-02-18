import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/Header'

storiesOf('Header', module)
  .add('simple', () => (
    <Header/>
  ))
