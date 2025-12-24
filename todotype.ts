

type Todo = {
    id: number;
    text: string;
    completed: boolean;

};

type Action = 
| {type: "ADD"; payload: string }
| {type: "REMOVE"; payload: number }
| {type: "TOGGLE"; payload: number }

function todoReducer(state: Todo[], action: Action): Todo[]{
    switch(action.type){
        case "ADD":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];

            case "REMOVE":
                return state.filter(todo => todo.id !== action.payload);

                case "TOGGLE": return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo );
   
             default:
                 return state;
   
   
            }
}