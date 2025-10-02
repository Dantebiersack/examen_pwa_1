import Card from "./Card";

type CardData = {
  id: number | string;
  title: string;
  imgUrl?: string;
  imgAlt?: string;
  children?: React.ReactNode;
};

type CardListProps = {
  cards: CardData[];
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function CardList({ cards, cols = 4 }: CardListProps) {
  return (
    <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-${cols} g-3`}>
      {cards.map((c) => (
        <div className="col" key={c.id}>
          <Card {...c} />
        </div>
      ))}
    </div>
  );
}
