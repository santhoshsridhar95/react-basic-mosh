import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  //   items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent, index: number) => {
    console.log(event);
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("Clicked" + item + index)}
            onClick={(event) => {
              handleClick(event, index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
