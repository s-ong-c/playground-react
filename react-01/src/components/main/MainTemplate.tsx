import * as React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.div``;
interface MainTemplateProps{}

const MainTemplate: React.SFC<MainTemplateProps> = props => {
  return <MainTemplateBlock>메인페이지다.</MainTemplateBlock>;
  };

export default MainTemplate;