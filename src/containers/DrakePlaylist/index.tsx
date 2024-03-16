//Author: Erik Rodriguez
"use client"; // This is a client component 👈🏽

import React, { Fragment, lazy, Suspense } from "react";
import useRequest from "../DataFetch/useRequest";
import Image from "next/image";
import Link from "next/link";

//lazy
const LazyPlayListContainer = lazy(
  () => import("../../components/PlayListMiniatures")
);
function DrakePlayList() {
  const { state } = useRequest(
    "https://my-json-server.typicode.com/androiderik/demo-fake-api/db"
  );
  const { playlists } = state.post;
  const myFunction = () => {
    return <Image  alt="applemusic" src="" />;
  };
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyPlayListContainer id="playlist">
          {playlists?.drake?.map((item: any) => {
            console.log(item.img, "itemm");
            return (
              <Fragment key={item.id}>
                {item.img && (
                  <Link href={item.link}>
                    <Image
                      src={require(`../../../public/assets/songCovers/${item.img}`)}
                      alt="applemusic"
                      width="200"
                      height="300"
                      key={item.id}
                      onError={() => myFunction()}
                    />
                  </Link>
                )}
                <p>{item.songTitle}</p>
              </Fragment>
            );
          })}
        </LazyPlayListContainer>
      </Suspense>
    </>
  );
}

export default DrakePlayList;
