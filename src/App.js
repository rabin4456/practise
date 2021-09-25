import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {  useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const searchUser = async (e) => {
    e.preventDefault();
    try {
      const myData = await axios(`https://api.github.com/users/${query} `);

      setItems(myData.data);
      console.log(items);
    } catch (error) {
      console.log(error.response);
    }
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <div className="contaier">
        <NavBar searchUser={searchUser} query={query} getQuery={onChange} />
        <Body items={items}   query={query}/>
      </div>
    </div>
  );
}

export default App;
