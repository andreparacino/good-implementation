import styles from "./index.module.css";
import trashIcon from "src/assets/trash.svg";
import { useClassNames } from "src/helpers/hooks";
import { memo } from "react";
import PriorityFlag from "src/components/UI/PriorityFlag";
import NotifyBell from "src/components/UI/NotifyBell";

const Todo = memo(function Todo({ todo, onStatusChange, onDelete }) {
  const { isCompleted, shouldNotify, priority, title, id } = todo;

  const todoClassNames = useClassNames([
    styles.Todo,
    isCompleted && styles[`Todo--completed`],
  ]);

  console.log(
    `Todo with title "${title}" was rendered at`,
    new Date().toLocaleTimeString()
  );

  return (
    <div className={styles.TodoWrapper}>
      <input
        type="checkbox"
        checked={isCompleted || false}
        onChange={() => onStatusChange(id)}
      />

      <div className={todoClassNames}>
        <div className={styles["Todo-settings"]}>
          <PriorityFlag priority={priority} />
          |
          <NotifyBell shouldNotify={shouldNotify} />
        </div>
        <div className={styles["Todo-body"]}>
          <p>{title}</p>
        </div>
      </div>

      <button onClick={() => onDelete(id)} className={styles["Todo-delete"]}>
        <img src={trashIcon} alt="delete" />
      </button>
    </div>
  );
});

export default Todo;
