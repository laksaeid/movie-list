import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { ActionType, Initial } from '@/interfaces';

interface Props {
  children: ReactNode;
}
const initial: Initial = {
  firstData:[],
  form: {
    title: '',
    year: '',
    director: '',
    genre: '',
    description: '',
  },
  newData: true,
  isEdit: false,
  editId: 0,
  data: [],
};

const reducer = function (state: Initial, action: ActionType) {
  switch (action.type) {
    case 'initialData':
      return {
        ...state,
        data: action.payload,
        firstData:action.payload
      };
    case 'controlForm':
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.key as keyof Initial]: action.payload.value,
        },
      };
    case 'newData':
      return { ...initial, newData: action.payload };
    case 'cancel':
      return { ...initial, data: state.data };
    case 'editData':
      return {
        ...state,
        form: action.payload.form,
        isEdit: true,
        editId: action.payload.editId,
      };
    case 'search':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state
  }
};
const movieContext = createContext<{
  state: Initial;
  dispatch: Dispatch<any>;
}>({
  state: initial,
  dispatch: () => null,
});
// eslint-disable-next-line react-refresh/only-export-components
export const useMovie = () => useContext(movieContext);
export const MovieProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initial,undefined);
  return (
    <movieContext.Provider value={{ state, dispatch }}>
      {children}
    </movieContext.Provider>
  );
};
