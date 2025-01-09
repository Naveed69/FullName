import { useState } from "react";

const Display = () => {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");

  const handle = (e) => {
    e.preventDefault();
    setName(e.target.firstname.value);
    setLast(e.target.lastname.value);
  };
  return (
    <>
      <div className="cointener">
        <h1>Full Name Display</h1>
        <form
          onSubmit={(e) => {
            handle(e);
          }}
        >
          <label>First Name:</label>
          <input type="text" name="firstname" required></input>
          <br />
          <label>Last Name:</label>
          <input type="text" name="lastname" required></input>
          <br />
          <button type="submit">Submit</button>
        </form>
        {last ? (
          <p>
            Full Name: {name} {last}
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Display;
