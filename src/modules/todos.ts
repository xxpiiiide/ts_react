// 액션 타입
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 새로운 항목 추가 시 사용할 고유 ID값
let nextId = 1;

// action 생성 함수
export const addTodo = (text: string) => ({
	type: ADD_TODO,
	payload: {
		id: nextId++,
		text,
	},
});

export const toggleTodo = (id: number) => ({
	type: TOGGLE_TODO,
	payload: id,
});

export const removeTodo = (id: number) => ({
	type: REMOVE_TODO,
	payload: id,
});

// 액션객체들의 type
type TodosAction =
	| ReturnType<typeof addTodo>
	| ReturnType<typeof toggleTodo>
	| ReturnType<typeof removeTodo>;

// 각 항목들의 데이터 타입
export type Todo = {
	id: number;
	text: string;
	done: boolean;
};

// 이 모듈에서 관리할 상태는 Todo객체로 이루어진 배열
export type TodosState = Todo[];

// 초기상태
const initialState: TodosState = [];

// 리듀서작성
function todos(
	state: TodosState = initialState,
	action: TodosAction
): TodosState {
	switch (action.type) {
		case ADD_TODO:
			return state.concat({
				id: action.payload.id,
				text: action.payload.text,
				done: false,
			});
		case TOGGLE_TODO:
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);
		case REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
}

export default todos;
