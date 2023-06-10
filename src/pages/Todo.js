import { useQuery } from "@apollo/client";
import Navigation from "../components/Navigation";
import GET_TODOS from "../api/GetToDo";
import TodoItem from "../components/TodoItem";

function Todo() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Navigation></Navigation>
      <h2 class="text-4xl font-bold leading-tight pt-12 pl-12 pr-12 pb-2">To Do</h2>
      <form class="pl-12 pr-12 flex">
        <input
          type="text"
          autoComplete="username"
          className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="janesmith"
        />
        <button type="submit"></button>
      </form>

      <hr class="mt-4 mb-8 ml-12 mr-12"></hr>
      <ol class="pl-16 pr-16">
        {data.todo.map((todo) => (
          <TodoItem todo={todo}></TodoItem>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
