//Author: Erik Rodriguez
"use client"; // This is a client component 👈🏽

import React, { Fragment, lazy, Suspense } from "react";
import useRequest from "./useRequest";
import Image from "next/image";

//lazy
const LazyPlayListContainer = lazy(
  () => import("../../components/PlayListMiniatures"),
);
function DataFectch() {
  const { state } = useRequest(
    "https://my-json-server.typicode.com/androiderik/demo-fake-api/db",
  );
  const { posts } = state.post;
  const myFunction = () => {
    return <img src="" />;
  };
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyPlayListContainer id="playlist">
          {posts?.map((item) => {
            console.log(item.img, "itemm")
            return <Fragment key={item.id}>
              {item.img && (
                <Image
                  src={require(
                    `../../../public/assets/PlaylistCovers/${item.img}`,
                  )}
                  alt="applemusic"
                  width="200"
                  height="300"
                  key={item.id}
                  onError={() => myFunction()}
                />
              )}
              <p>{item.title}</p>
            </Fragment>
          })}
        </LazyPlayListContainer>
      </Suspense>
    </>
  );
}

export default DataFectch;
