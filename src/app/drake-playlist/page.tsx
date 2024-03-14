//Author: Erik Rodriguez
import React from "react";
import DrakePlaylist from "../../containers/DrakePlaylist";
import Link from "next/link";

function DrakePlayList() {
  return (
    <>
      <div className="dash-title">Playlist songs for drake</div>
      <DrakePlaylist />
      <Link href="/">Back to home</Link>
      <br/>
      <Link href="/browse">Back to Browse</Link>
    </>
  );
}

export default DrakePlayList;