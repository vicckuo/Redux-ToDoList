import ToDoContext from "./context/ToDoContext";
import Router from "./routes/Router";

import useToDo from "./utils/useToDo";

//Redux相關設定
import { Provider } from "react-redux"
import store from './redux/store'

function App() {
  const { toDo, addToDo, updateToDo, deleteToDo } = useToDo()

  //綁定store至Provider
  return (
    <Provider store={store}>
      <ToDoContext.Provider
        value={{
          data: toDo,
          updateToDo: updateToDo,
          addToDo: addToDo,
          deleteToDo: deleteToDo
        }}
      >
        <Router />
      </ToDoContext.Provider>
    </Provider>
  );
}

export default App;
