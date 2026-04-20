import Pagination from './components/Pagination'
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <Pagination
          url="https://jsonplaceholder.typicode.com/posts"
          itemsPerPage={6}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;