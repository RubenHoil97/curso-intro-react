import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from "../TodoError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return(
        <React.Fragment>
            {/*Nuevos componentes */}

            
            {loading && 
                (<TodosLoading />)
            }
            {error && (
                <Modal>
                    <TodosError error={error} />
                </Modal>
            )}
            {(!!loading && !searchedTodos.length) && <EmptyTodos />}
            {/* */}
            {/*Pasamos el estado a nuestro componente*/}
            <TodoCounter />

            <br></br>
            <TodoSearch />

                <TodoList>
                    
                    {error && <p>Desesperate, hubo un error...</p>}
                    {loading && <p>Estamos cargando, no desesperes...</p>}
                    {(!loading && !searchedTodos.length) && (<EmptyTodos/>)}
        
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}


            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export {AppUI};