import * as React from "react";
import styled from "styled-components";

const SuperMarketTemplateBlock = styled.div`
  width: 768px;
  display: flex;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  div {
    padding: 1rem;
    flex: 1;
  }

  h2 {
    margin-top: 0;
  }
  .items-wrapper {
    background: #f8f9fa;
  }
`;
export interface SuperMarketTemplateProps {
  items: React.ReactNode;
  basket: React.ReactNode;
}

const SuperMarketTemplate: React.SFC<SuperMarketTemplateProps> = ({
  items,
  basket
}) => {
  return (
    <SuperMarketTemplateBlock>
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
      </div>
    </SuperMarketTemplateBlock>
  );
};

export default SuperMarketTemplate;
