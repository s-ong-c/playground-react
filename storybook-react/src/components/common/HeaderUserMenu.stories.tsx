import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import HeaderUserMenu from './HeaderUserMenu';
import StoryRouter from 'storybook-react-router';
/**
 *
 * router Link issue
 * https://medium.com/tech-eatwith/storybook-jest-and-the-react-router-link-cb4bc9859436
 */
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
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('HeaderUserMenu', () => (
    <>
      <HeaderUserMenu
        onClose={action('onClose')}
        username={User.username}
        onLogout={action('logOut')}
        visible={true}
      />
    </>
  ));
