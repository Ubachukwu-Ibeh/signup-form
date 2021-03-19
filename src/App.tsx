import React from "react";
import Form from "./pages/OrdersPage/components/Form/Form";
import Styles from "./App.module.scss";

const App = () => {
  return (
    <div className={Styles.main}>
      <Form />
      <div className={Styles.circle1}></div>
      <div className={Styles.circle2}></div>
    </div>
  );
};
export default App;
