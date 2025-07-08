import React, { FormEvent, useRef } from "react";

const FormUsingUseRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      console.log(nameRef.current.value);
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      console.log(ageRef.current.value);
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5>Forms using useRef hook</h5>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" ref={nameRef} type="text" className="form-control" />
      </div>
      <p>{person.name}</p>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" ref={ageRef} type="number" className="form-control" />
      </div>
      <p>{person.age}</p>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUsingUseRef;
