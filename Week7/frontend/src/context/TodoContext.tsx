import { createContext, useContext, useReducer, type ReactNode } from "react";

// define the structure of a Todo
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// define the possible actions
type TodoAction = 
  | { type: 'add'; text: string } 
  | { type: 'edit'; id: number; text: string } 
  | { type: 'toggle'; id: number } 
  | { type: 'delete'; id: number } 
  | { type: 'clearDone' };
  
// create the Context
interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextType | null>(null);

// create the reducer
function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch(action.type) {
    case 'add': 
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          done: false,
        },
      ];

      case 'edit': 
        return state.map(todo => 
          todo.id === action.id 
          ? { ...todo, text: action.text }
          : todo
        );

      case 'toggle': 
        return state.map(todo => 
          todo.id === action.id
            ? { ...todo, done: !todo.done }
            : todo
        );

      case 'delete': 
        return state.filter(todo => todo.id !== action.id);

      case 'clearDone': 
        return state.filter(todo => !todo.done);

      default: 
        return state;
  }
}

// create the Provider
interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      { children }
    </TodoContext.Provider>
  );
}

// create a custom context hook
export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodos must be used inside TodoProvider');
  }

  return context;
}