import React from "react";
import './TodosLoading.css';

function TodosLoading() {
    return(
        <div className="LoadingTodo-container">
            <div className="spinner"></div>
            {/* <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Loading...</p>;
            <span className="LoadingTodo-deleteIcon"></span> */}
        </div>
    );
}


export {TodosLoading};