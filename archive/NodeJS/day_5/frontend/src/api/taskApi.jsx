const BASE_URL = "http://localhost:8000";

export const getTasks = async () => {
  const res = await fetch(`${BASE_URL}/`);
  return res.json();
};

export const addTask = async (task) => {
  const res = await fetch(`${BASE_URL}/post-task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/update-task/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/delete-task/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
