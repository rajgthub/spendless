import React, { Component} from "react";
import "./App.css";
import Cards from "./Cards";
import Header from "./Header/index";
import Footer from "./Footer/index";
class App extends Component {
  render() {
    return (
      <div className="Appcontainer">
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
