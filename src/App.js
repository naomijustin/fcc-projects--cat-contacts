import React from "react"
import Card from "./Card.js"
import "./App.css"

function App() {
  return (
    <div className="card-container">
      <Card 
        img="./images/cat-1.jpg"
        name="Mr. Whiskerson"
        phone="0412 123 123"
        email="cat1@test.com"
      />
      <Card 
        img="./images/cat-2.jpg"
        name="Felix"
        phone="0412 222 222"
        email="cat2@test.com"
      />
      <Card 
        img="./images/cat-3.jpg"
        name="Potato"
        phone="0412 333 333"
        email="cat3@test.com"
      />
      <Card 
        img="./images/cat-4.jpg"
        name="Keiko"
        phone="0412 444 444"
        email="cat4@test.com"
      />
    </div>
  )
}

export default App