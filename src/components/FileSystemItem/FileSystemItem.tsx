import "./FileSystemItem.css";
import {useState, FC} from "react";
import {SystemHashMap} from "../../hooks/useSystemParser/useSystemParser.ts";

type FileSystemItemProps = {
  name: string;
  systemHashMap: SystemHashMap;
}

export const FileSystemItem: FC<FileSystemItemProps> = ({name, systemHashMap}) => {
  const [collapsed, setCollapsed] = useState(true);
  const children = systemHashMap.get(name) || [];

  return (
    <div className="file-system__item">
      <button className="file-system__item__name" onClick={() => setCollapsed(!collapsed)}>{name}</button>
      {children.length > 0 && !collapsed && (
        <div className="file-system__item__children">
          {children.map((childName, index) => (
            <FileSystemItem name={childName} systemHashMap={systemHashMap} key={childName + index}/>
          ))}
        </div>
      )}
    </div>
  )
}