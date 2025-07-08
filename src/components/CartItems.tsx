import Button from "./Button";

interface Props {
  cartItems: String[];
  onClear: () => void;
}

const CartItems = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>CartItems</div>
      <ul>
        {cartItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <Button color="primary" onClick={onClear}>
        Clear
      </Button>
    </>
  );
};

export default CartItems;
