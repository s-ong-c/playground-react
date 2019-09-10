import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultThumbnail } from '../../static/images';
import {
  withKnobs,
  text,
  boolean,
  color,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import HeaderUserIcon from './HeaderUserIcon';

const components = storiesOf('Header', module);
const User = {
  id: '11',
  username: '송민석',
  profile: {
    thumbnail:
      'https://faint1122.s3.ap-northeast-2.amazonaws.com/Image+from+iOS+(1).jpg',
    display_name: 'songc',
  },
};

components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('HeaderUserIcon', () => (
    <>
      <HeaderUserIcon
        onClick={action('clicked')}
        img={object('img', User.profile.thumbnail, 'img')}
        user={object('user', User, 'user')}
      >
        새 글 작성
      </HeaderUserIcon>
      <HeaderUserIcon
        onClick={action('clicked')}
        img={object('defaultImg', defaultThumbnail, 'img')}
        user={object('user', User, 'user')}
      >
        새 글 작성
      </HeaderUserIcon>
    </>
  ));
