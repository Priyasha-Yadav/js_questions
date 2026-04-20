import { useState } from "react";
import { addTask } from "../api/taskApi";

const TaskFormModal = ({ close, refresh }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(form);
    refresh();
    close();
  };

  return (
    <div style={styles.overlay}>
      <form style={styles.modal} onSubmit={handleSubmit}>
        <h3>Add Task</h3>

        <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input type="date" onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
        <input type="date" onChange={(e) => setForm({ ...form, endDate: e.target.value })} />

        <button>Add</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

const styles = {
  overlay: { position: "fixed", inset: 0, background: "#0005" },
  modal: { background: "#fff", padding: 20, width: 300, margin: "100px auto" }
};

export default TaskFormModal;
