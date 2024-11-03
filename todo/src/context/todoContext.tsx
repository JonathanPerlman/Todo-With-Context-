import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface ToDoContextProps {
    todos: Todo[];
    addToDo: (text: string) => void;
    updateToDo: (id: number) => void;
    deleteToDo: (id: number) => void;
}

interface TodoProviderProps {
    children: ReactNode;
}

const ToDoContext = createContext<ToDoContextProps | null>(null);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addToDo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const updateToDo = (id: number) => {
        setTodos(todos.map((t) => 
            t.id === id ? { ...t, completed: true } : t
        ));
    };

    const deleteToDo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    return (
        <ToDoContext.Provider value={{ todos, addToDo, updateToDo, deleteToDo }}>
            {children}
        </ToDoContext.Provider>
    );
};

export const useToDo = () => {
    const context = useContext(ToDoContext);
    if (context === null) {
        throw new Error("useToDo must be used within a TodoProvider");
    }
    return context;
};
