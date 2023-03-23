import "./css/all.min.css"
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  function switchMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  const mappedData = data.map(data =>{
    return <Card
    key = {data.id}
    {...data}
    />
  }) 
  return (
    <div className={darkMode? "container dark" : "container"}>
      <Navbar 
        darkMode = {darkMode}
        switchMode = {switchMode}
      />
      <Hero />
      <section className="card-container">
        {mappedData}      
      </section>
    </div>
  )
}
export default App;
