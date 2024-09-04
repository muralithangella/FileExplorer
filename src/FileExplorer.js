import { useState } from "react";

const FileExplorer = ({ explorer }) => {
  const [show, setShow] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <div className="FolderName" onClick={() => setShow(!show)}>
          📁{explorer.name}
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          {explorer.items.map((exp) => {
            return <FileExplorer explorer={exp} key={exp.id} />;
          })}
        </div>
      </>
    );
  } else {
    return <span>📄{explorer.name}</span>;
  }
};

export default FileExplorer;
