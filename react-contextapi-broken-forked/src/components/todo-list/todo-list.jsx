import { useContext } from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleDelete = (id) => {
    // Görevi silme özelliğini düzeltin
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Görevi değiştirme yeteneğini düzeltin
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  const filteredTodos = todos.filter((todo) => todo.label.trim() !== "");

  return (
    <div className="todo-list">
      <span className="todo-list-title">Yapılacak Görevler:</span>
      {filteredTodos.length ? (
        <div className="todo-list-content">
          {filteredTodos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Görünüşe göre bugün özgürsün</div>
      )}
    </div>
  );
};
