import * as React from "react";
import ShopItem, { ShopItemProps } from "./ShopItem";

export interface ShopItemListProps {}
const ShopItemList: React.SFC<ShopItemListProps> = props => {
  const items: ShopItemProps[] = [
    {
      name: "생수",
      price: 850
    },
    {
      name: "신라면",
      price: 900
    },
    {
      name: "포카칩",
      price: 1500
    },
    {
      name: "새우깡",
      price: 1000
    }
  ];
  const itemList = items.map(item => <ShopItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default ShopItemList;
