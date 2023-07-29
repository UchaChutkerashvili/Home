import CreateTodo from "../page/CreateTodo";
import DoneTodosList from "../page/DoneTodosList";
import TodoList from "../page/TodoList";

const routes = [
  {
    element: <TodoList />,
    path: "/",
  },
  {
    element: <CreateTodo />,
    path: "/create",
  },
  { element: <DoneTodosList />,
   path: "/donelist" 
  },
];

export default routes;
