import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskItem from "./TaskItem";

const TaskList = ({ search }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.tasks || []);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <>
      {tasks
        .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
        .map(task => (
          <TaskItem key={task.id} task={task} refresh={fetchTasks} />
        ))}
    </>
  );
};

export default TaskList;
