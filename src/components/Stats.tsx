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
        {percentage === 100
          ? "You have everything. Ready to go ✈️"
          : `You have ${numItems} items on lists, and you already packed ${numPacked} 
        ${numPacked <= 1 ? "item" : "items"} (${
              numItems === 0 ? "0" : percentage
            }%)`}
      </em>
    </footer>
  );
}
