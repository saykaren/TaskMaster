import "../Styling/App.css";
import React from "react";
import DragDrop from "./DragDrop";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Task Master</header>
      <section className="AppContent">
        <DragDrop />
      </section>
      <div className="AppFooter">Created by sayKaren</div>
    </div>
  );
};

export default App;
