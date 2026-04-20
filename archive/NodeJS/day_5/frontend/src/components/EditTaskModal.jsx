import { useState } from "react";
import { updateTask } from "../api/taskApi";

const EditTaskModal = ({ task, close, refresh }) => {
  const [form, setForm] = useState(task);

  const handleUpdate = async () => {
    await updateTask(task.id, form);
    refresh();
    close();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Edit Task</h3>

        <input value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
        <textarea value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}/>

        <button onClick={handleUpdate}>Update</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: { position:"fixed", inset:0, background:"#0005" },
  modal: { background:"#fff", padding:20, width:300, margin:"100px auto" }
};

export default EditTaskModal;
