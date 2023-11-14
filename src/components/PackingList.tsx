export type ItemProps = {
  id: number;
  description: string;
  qty: number;
  packed: boolean;
};

type PackingListProps = {
  items: ItemProps[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
}: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item: ItemProps) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

type ItemComponentProps = {
  item: ItemProps;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onDeleteItem, onToggleItem }: ItemComponentProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
