const Navbar = ({ onAddClick, onSearch }) => {
  return (
    <nav style={styles.nav}>
      <h3>Home</h3>

      <input
        placeholder="Search tasks..."
        onChange={(e) => onSearch(e.target.value)}
        style={styles.search}
      />

      <button onClick={onAddClick}>+ Add</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    alignItems: "center",
  },
  search: {
    flex: 1,
    padding: "6px",
  },
};

export default Navbar;
