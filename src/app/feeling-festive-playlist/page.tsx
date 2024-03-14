//Author: Erik Rodriguez
import React from "react";
import Link from "next/link";

function FeelingFestivePlaylist() {
  return (
    <>
      <div className="dash-title">Playlist songs for feeling festive</div>
      <Link href="/">Back to home</Link>
      <Link href="/browse">Back to Browse</Link>
    </>
  );
}

export default FeelingFestivePlaylist;
