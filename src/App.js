import logo from './logo.svg';
import './App.css';
import Card from './card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const priceData=[{
    name:"FREE",
    price:0,
    prices:[{value:"0"}]
  },{
    name:"PLUS",
    price:9,
    prices:[{value:"9"}]
  },{
    name:"PRO",
    price:49,
    prices:[{value:"49"}]
  },
    
  ];
  return (
    <>
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                  {priceData.map((card)=>{
                    return <Card card={card}></Card>
                  })}
                </div>
            </div>
        </section>
    </>
  );
}

export default App;
