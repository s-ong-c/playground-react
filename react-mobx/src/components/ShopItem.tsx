import * as React from "react";
import styled from "styled-components";

const ShopItemBlock = styled.div`
  .ShopItem {
    background: white;
    border: 1px solid #495057;
    padding: 0.5rem;
    border-radius: 2px;
    cursor: pointer;

    h4 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    &:hover {
      background: #495057;
      color: white;
    }

    & + & {
      margin-top: 1rem;
    }
  }
`;

export interface ShopItemProps {
  name: string;
  price: number;
  onPut: (name: string, price: number) => void;
}

const ShopItem: React.SFC<ShopItemProps> = ({ name, price, onPut }) => {
  const onPutClick = () => {
    onPut(name, price);
  };
  return (
    <ShopItemBlock>
      <div className="ShopItem" onClick={onPutClick}>
        <h4>{name}</h4>
        <div>{price}원</div>
      </div>
    </ShopItemBlock>
  );
};

export default ShopItem;
