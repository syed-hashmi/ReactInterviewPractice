import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

import api from "./initializer";

import "./index.css"
export default function App({ name, age }) {
  let [id, setId] = useState("");
  useEffect(() => {
    let pp = api.post("objects", {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    pp.then((data) => {
      debugger;
      setId(data?.data?.id);
      return data?.data?.id;
    }).catch((data) => {
      debugger;
      console.log("error");
    });
  }, []);
  return (
    <div className="saroshClass">
      <div className="items"> sarosh hashmi</div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
}

const userData = {
  name: "Jane Doe",
  age: 30,
  occupation: "Software Engineer",
};

let root = createRoot(document.getElementById("root"));
root.render(<App name={userData?.name} age={userData.age} />);
