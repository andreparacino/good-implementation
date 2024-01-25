import { useCallback, useState } from "react";
import styles from "./index.module.css";
import { DEFAULT_TODO } from "src/helpers/constants";
import NotifyBell from "src/components/UI/NotifyBell";
import PriorityFlag from "src/components/UI/PriorityFlag";
import PilledRadioGroup from "../UI/PilledRadioGroup";

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState(DEFAULT_TODO);
  const { title, priority, shouldNotify } = newTodo;

  const updateTodo = (key, value) =>
    setNewTodo((prev) => ({
      ...prev,
      [key]: value,
    }));

  const submitNewTodo = useCallback(() => {
    onAdd({
      ...newTodo,
      id: crypto.randomUUID(),
    });
    setNewTodo(DEFAULT_TODO);
  }, [newTodo, onAdd]);

  return (
    <div className={styles.AddTodo}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => updateTodo("title", e.target.value)}
      />
      <div className={styles["AddTodo-settings"]}>
        <PriorityFlag
          priority={priority}
          className={styles["AddTodo-settings-priority"]}
        />
        <PilledRadioGroup
          options={[
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ]}
          selected={priority}
          onChange={(value) => updateTodo("priority", value)}
        />
        |
        <NotifyBell
          onClick={() => updateTodo("shouldNotify", !shouldNotify)}
          shouldNotify={shouldNotify}
        />
        |
        <button onClick={submitNewTodo} disabled={!title.trim().length}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
