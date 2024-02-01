//Author: Erik Rodriguez
import { memo } from "react";
import "./playlist-miniatures.css";

interface PlayListMiniaturesProps {
  children: React.ReactNode;
  id: string;
}

const PlayListMiniatures = ({ children, id }: PlayListMiniaturesProps) => {
  return (
    <div className="grid-container" id={id}>
      {children}
    </div>
  );
};

export default memo(PlayListMiniatures);
