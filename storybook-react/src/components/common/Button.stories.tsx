import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RoundButton from './RoundButton';

const components = storiesOf('Components', module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Login Button', () => (
    <RoundButton onClick={() => {}} size="DEFAULT">
      로그인
    </RoundButton>
  ))
  .add('new Button', () => (
    <RoundButton border color="darkGray" style={{ marginRight: '1.25rem' }}>
      새 글 작성
    </RoundButton>
  ));
