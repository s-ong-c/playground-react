import * as React from "react";
import styled from "styled-components";

const BasketItemBlock = styled.div`
  display: flex;
  width: 100%;

  .name {
    flex: 2;
  }

  .price {
    flex: 1;
  }

  .count {
    flex: 1;
  }

  .return {
    margin-left: auto;
    color: #f06595;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  & + & {
    margin-top: 1rem;
  }
`;

export interface BasketItemProps {
  name: string;
  price: number;
  count: number;
}

const BasketItem: React.SFC<BasketItemProps> = ({ name, price, count }) => {
  return (
    <BasketItemBlock>
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return">갖다놓기</div>
    </BasketItemBlock>
  );
};

export default BasketItem;
