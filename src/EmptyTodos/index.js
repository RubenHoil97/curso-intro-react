import React from "react";
import { MdOutlineCreate } from 'react-icons/md';
import './EmptyTodos.css';

function EmptyTodos() {
    return (
        <div className="EmptyTodos">
            <MdOutlineCreate className="iconCreate" aria-hidden="true"/>
            <p>¡Crea tu primer TODO¡</p>
        </div>
    );
}


export {EmptyTodos};