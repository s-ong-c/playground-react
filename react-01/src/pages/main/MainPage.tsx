import * as React from 'react';
import styled from 'styled-components';
import MainTemplate from '../../components/main/MainTemplate';

const MainPageBlock = styled.div``;
interface MainPageProps{}

const MainPage: React.SFC<MainPageProps> = props => {
  return <MainTemplate />;
  };

export default MainPage;