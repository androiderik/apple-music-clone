//Author: Erik Rodriguez
import React from "react";
import DataFetch from "../../containers/DataFetch";
import Link from "next/link";
function Browse() {
  return (
    <div className="dash-title">
      Playlist miniatures
      <DataFetch />
      <Link href="/">Back to home</Link>
    </div>
  ); 
}

export default Browse