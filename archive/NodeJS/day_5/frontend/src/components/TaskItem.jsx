import { deleteTask, updateTask } from "../api/taskApi";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task, refresh }) => {
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Delete this task?")) {
      await deleteTask(task.id);
      refresh();
    }
  };

  const handleStatus = async (e) => {
    await updateTask(task.id, { status: e.target.value });
    refresh();
  };

  return (
    <div style={{ border:"1px solid #ccc", padding:10 }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>

      <select value={task.status} onChange={handleStatus}>
        <option value="not-started">Not Started</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={()=>setEditOpen(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {editOpen && <EditTaskModal task={task} close={()=>setEditOpen(false)} refresh={refresh} />}
    </div>
  );
};

export default TaskItem;
