import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import CartItems from "./components/CartItems";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/form/FormUsingUseRef";
import FormUsingUseRef from "./components/form/FormUsingUseRef";
import FormUsingUseState from "./components/form/FormUsingUseState";
import FormUsingReactHookForm from "./components/form/FormUsingReactHookForm";
import FormUsingReactHookFormUsingZod from "./components/form/FormUsingReactHookFormUsingZod";
import UseEffect from "./components/use_effect/UseEffect";
import ProductList from "./components/use_effect/ProductList";
import CategoryList from "./components/use_effect/CategoryList";
import EffectCleanUp from "./components/use_effect/EffectCleanUp";
import User from "./components/use_effect/connecting_to_backend/user/User";
import UserCancellingRequest from "./components/use_effect/connecting_to_backend/user/UserCancellingRequest";
import User_DeleteData from "./components/use_effect/connecting_to_backend/user/User_CUD_operation";
import User_CUD_operation from "./components/use_effect/connecting_to_backend/user/User_CUD_operation";
import User_CUD_operation_Reusable_api from "./components/use_effect/connecting_to_backend/user/User_CUD_operation_Reusable_api";
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

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

      <div>
        <h4>Forms </h4>
        <FormUsingUseRef></FormUsingUseRef>
        <FormUsingUseState></FormUsingUseState>
        <FormUsingReactHookForm></FormUsingReactHookForm>
        <FormUsingReactHookFormUsingZod></FormUsingReactHookFormUsingZod>
      </div>

      <div className="mb-3">
        <h4>UseEffect</h4>
        <UseEffect />
        <ProductList category={selectedCategory} />
        <CategoryList setSelectedCategory={(cat) => setSelectedCategory(cat)} />
        <ProductList category={selectedCategory} />
        <EffectCleanUp />
      </div>
      <div className="mb-3">
        <h4>Fetching Data from backend</h4>
        {error && <p className="text-danger">{error}</p>}
        <h3>handling error</h3>
        <User setError={(err) => setError(err)} />
        <UserCancellingRequest setError={(err) => setError(err)} />
        <User_CUD_operation setError={(err) => setError(err)} />
        <User_CUD_operation_Reusable_api setError={(err) => setError(err)} />
      </div>
    </>
  );
}

export default App;
