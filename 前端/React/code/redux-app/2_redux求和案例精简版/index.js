import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// 直接在这写订阅，不用每个组件都写了
store.subscribe(() => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})