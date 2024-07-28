//Author: Erik Rodriguez
"use client"; // This is a client component 👈🏽

import React, { Fragment } from "react";
import useRequest from "./useRequest";
import Image from "next/image";
import Link from "next/link";


function DataFectch() {
  const { state } = useRequest(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  console.log(state, "state")
  const myFunction = () => {
    return <Image alt="applemusic" src="" />;
  };
  return (
    <>
          {/* {playlists?.titles?.map((item : any) => {
            console.log(item.img, "itemm");
            return (
              <Fragment key={item.id}>
                {item.img && (
                  <Link href={item.link}>
                  <Image
                    src={require(`../../../public/assets/PlaylistCovers/${item.img}`)}
                    alt="applemusic"
                    width="200"
                    height="300"
                    key={item.id}
                    onError={() => myFunction()}
                  />
                  </Link>
                )}
                <p>{item.title}</p>
              </Fragment>
            );
          })} */}
    </>
  );
}

export default DataFectch;
