import * as React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";
import ShopItemList from "./ShopItemList";
import BasketItemList from "./BasketItemList";
export interface SuperMarketProps {}

const SuperMarket: React.SFC<SuperMarketProps> = props => {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
};

export default SuperMarket;
