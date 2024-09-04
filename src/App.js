import "./styles.css";
import explorer from "./Data/Explorer";
import FileExplorer from "./FileExplorer";

export default function App() {
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <FileExplorer explorer={explorer} />
    </div>
  );
}
