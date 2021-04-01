import React from "react";
import { store } from "../store";
import "./button.css";
import { setTime } from "../actions";

const ButtonGroup = ({ title }) => (

    <div>
        {title.map((title, i) => (
            <button data-tech={title}
                key={`btn-${i}`}
                className="App_button"
                onClick={dispatchBtnAction}>
                {title}
            </button>
        ))}
    </div>
);

function dispatchBtnAction(e) {
    const title = e.target.dataset.tech;
    console.log('title', title);
    store.dispatch(setTime(title));
}

export default ButtonGroup;