import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  color,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RoundButton from './RoundButton';

// button style
const label = 'styles';
const defaultValue = {
  marginRight: '1.25rem',
};
const groupId = 'style';

// size properties
const size = 'size';
const size_defaultValue = 'DEFAULT';
const size_groupId = 'size';

const components = storiesOf('Components', module);

components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('LoginButton', () => (
    <RoundButton
      onClick={action('clicked')}
      size={object(size, size_defaultValue, size_groupId)}
    >
      로그인
    </RoundButton>
  ))
  .add('Button', () => (
    <RoundButton
      border={boolean('border', true)}
      size={object(size, size_defaultValue, size_groupId)}
      style={object(label, defaultValue, groupId) as React.CSSProperties}
      //   style={{ marginRight: '1.25rem' }}
    >
      새 글 작성
    </RoundButton>
  ));
