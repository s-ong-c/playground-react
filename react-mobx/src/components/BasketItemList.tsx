import * as React from "react";
import styled from "styled-components";
import BasketItem from "./BasketItem";

const BasketItemListBlock = styled.div``;
export interface BasketItemListProps {}

const BasketItemList: React.SFC<BasketItemListProps> = props => {
  return (
    <BasketItemListBlock>
      <div>
        <BasketItem name="포카칩" price={1500} count={2} />
        <BasketItem name="생수" price={850} count={1} />
        <hr />
        <p>
          <b>총합: </b> 3850원
        </p>
      </div>
    </BasketItemListBlock>
  );
};

export default BasketItemList;
