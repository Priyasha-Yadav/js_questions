import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import TaskFormModal from "../components/TaskFormModal";

const Home = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar onAddClick={()=>setAddOpen(true)} onSearch={setSearch} />
      <TaskList search={search} />
      {addOpen && <TaskFormModal close={()=>setAddOpen(false)} refresh={()=>window.location.reload()} />}
    </>
  );
};

export default Home;
