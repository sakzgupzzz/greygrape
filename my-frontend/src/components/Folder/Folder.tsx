import React, { useState } from 'react';
import './Folder.css';

interface FolderProps {
  name: string;
  children?: React.ReactNode;
}

const Folder: React.FC<FolderProps> = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-header" onClick={toggleOpen}>
        {isOpen ? '📂' : '📁'} {name}
      </div>
      {isOpen && <div className="folder-content">{children}</div>}
    </div>
  );
};

export default Folder;

