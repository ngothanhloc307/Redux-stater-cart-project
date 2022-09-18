import React from "react";
import { Provider } from "react-redux";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import { createStore } from "redux";
import reducer from "./reducer";

//store
const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
