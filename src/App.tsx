import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import CartItems from "./components/CartItems";
import ExpandableText from "./components/ExpandableText";

function App() {
  let items = ["Bengaluru", "Mumbai", "Chennai", "Hyderabad"];
  const [alertVisible, setAlertVisible] = useState(false);
  const [drink, setDrink] = useState({ title: "pepsi", price: 6 }); // updating object
  const [customer, setCustomer] = useState({
    // updating nested object
    name: "San",
    address: { city: "Bengaluru", pincode: 560006 },
  });
  const [tags, setTags] = useState(["happy", "cheer"]);
  const [employees, setEmployees] = useState([
    { id: 1, name: "Santhu", department: "CS" },
    { id: 2, name: "Kav", department: "EC" },
  ]);

  const [products, setProducts] = useState(["Clock", "Laptop"]);

  function handleSelectedItem(item: string) {
    console.log(item);
  }

  const handleClick = () => {
    console.log("clicked");
    setDrink({ ...drink, price: 10 });
    setCustomer({
      ...customer,
      address: { ...customer.address, pincode: 560045 },
    });

    setTags([...tags, "sorrow"]); //adding item in array

    setTags(tags.filter((tag) => tag !== "happy")); // deleting item from array

    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag))); // updating item in array

    setEmployees(
      employees.map(
        (emp) => (emp.id === 1 ? { ...emp, department: "ECE" } : emp) //updating the array object
      )
    );

    setEmployees(
      produce((draft) => {
        //Using immer to change the array object elements
        const emp = draft.find((emp) => emp.id === 1);
        if (emp) emp.name = "Santhosh";
      })
    );
  };

  function clear() {
    setProducts([]);
  }

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectedItem={handleSelectedItem}
        />

        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello <span>Sanvya</span>
          </Alert>
        )}

        <Button color="secondary" onClick={() => setAlertVisible(true)}>
          Click Button
        </Button>

        <Button color="secondary" onClick={handleClick}>
          Click Button
        </Button>
        <p>
          {drink.price}

          {customer.address.pincode}

          {employees.map((emp) => (
            <>
              {emp.department}
              {emp.name}
            </>
          ))}
        </p>
      </div>
      <div>
        <h4> Sharing state between Components</h4>
        <NavBar itemCount={products.length} />
        <CartItems cartItems={products} onClear={clear} />
      </div>
      <div>
        <ExpandableText maxChars={30}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt
          hic nisi eius labore, porro voluptates excepturi minima, adipisci
          alias cupiditate voluptatem consequuntur repudiandae laborum quo. Quis
          repudiandae aliquid, mollitia, nobis nemo nam reiciendis ad repellat
          tenetur dolores porro dicta voluptas ex doloribus expedita facere
          placeat quidem provident unde modi fugit itaque eum aspernatur
          facilis! Iste officiis vero dicta neque reiciendis id ratione aliquid
          eum consequatur ipsam laboriosam voluptate recusandae fugit placeat
          dolorum officia voluptates blanditiis, beatae provident sapiente
          impedit. Voluptates at dolor magnam reprehenderit, culpa soluta
          asperiores commodi voluptate earum, quis quisquam repudiandae,
          similique architecto nobis pariatur incidunt et.
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
