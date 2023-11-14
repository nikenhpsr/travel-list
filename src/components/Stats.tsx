type ItemProps = {
  id: number;
  description: string;
  qty: number;
  packed: boolean;
};

type StatsProps = {
  items: ItemProps[];
};

export default function Stats({ items }: StatsProps) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on lists, and you already packed {numPacked}{" "}
        {`${numPacked <= 1 ? "item" : "items"}`} ({percentage}%)
      </em>
    </footer>
  );
}
