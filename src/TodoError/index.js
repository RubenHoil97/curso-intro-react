import React from "react";
import { MdSearchOff } from 'react-icons/md';
import './TodosError.css'

function TodosError() {
    return (
        <div className="TodoError">
            <MdSearchOff className="errorIcon" aria-hidden="true"/>
            <p>Vaya, parece que encontramos un problema, danos un poco de tiempo y vuelve a intenar en unos par de minutos...</p>
        </div>
    );
}


export {TodosError};