import React from "react";

type Props<Card> = {
  cards: Card[];
  renderItem: (item: Card) => React.ReactNode;
};

export function CatalogCard<Card>({ cards, renderItem }: Props<Card>) {
  return <div>{cards.map(renderItem)}</div>;
}
