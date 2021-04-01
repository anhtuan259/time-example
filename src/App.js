import React, { useState } from "react";
import './App.css';
import { store } from "./store";
import './time.css'
import ButtonGroup from "./components/buttonGroup";

class App extends React.Component {

  render() {
    // const state = store.getState();
    return (
      <div>
        <div>
          <p className="title_name">BOOK NAME</p>
          <p className="title_des">Understanding Redux 1</p>
        </div>
        <div>
          <p className="title_name">TOTAL TIME SPENT ON THE PROJECT</p>
          <div className="timeZone">
            <span className="active">ACTIVE SESSION: {store.getState().activeSession}</span>
            <div className="time">

              <span className="number">{(store.getState().days < 10 ? "0" : "") + store.getState().days}</span>


              <span className="ope">:</span>

              <span className="number">{(store.getState().hours < 10 ? "0" : "") + store.getState().hours}</span>



              <span className="ope">:</span>

              <span className="number" >{(store.getState().minutes < 10 ? "0" : "") + store.getState().minutes}</span>



              <span className="ope">:</span>

              <span className="number" >{(store.getState().seconds < 10 && store.getState().seconds >= 0 ? "0" : "") + store.getState().seconds}</span>


            </div>
            <div className="nameTime">
              <span className="titleTime">DAYS</span>
              <span className="titleTime">HOURS</span>
              <span className="titleTime">MINUTES</span>
              <span className="titleTime">SECONDS</span>
            </div>
          </div>

        </div>
        <div className="groupButton">
          <ButtonGroup
            key={1}
            title={["INCREASE", "DECREASE"]}
          />
        </div>

      </div>

    )
  }
}

export default App;
