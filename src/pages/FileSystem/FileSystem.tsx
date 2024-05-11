import "./FileSystem.css";
import FileSystemConfig from "../../config/FileSystem.json";
import {useSystemParser} from "../../hooks/useSystemParser/useSystemParser";
import {FileSystemItem} from "../../components/FileSystemItem/FileSystemItem.tsx";

export const FileSystem = () => {
  const systemHashMap = useSystemParser(FileSystemConfig);
  const root = systemHashMap.get("root") || [];

  return (
    <div className="FileSystem">
      <h1>File System</h1>
      <div className="FileSystem__content">
        {root.map((elementName, index) => (
          <FileSystemItem name={elementName} systemHashMap={systemHashMap} key={elementName + index}/>
        ))}
      </div>
    </div>
  );
};