//Author: Erik Rodriguez
import React from "react";
import DataFetch from "../../containers/DataFetch";

export function Browse() {
  return (
    <div className="dash-title">
      Playlist miniatures
      <DataFetch />
    </div>
  ); 
}
