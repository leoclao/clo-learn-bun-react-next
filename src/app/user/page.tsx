'use client';

import { useState } from 'react';
import Login from "./login/page";
import Profile from "./profile/page";

// import { useState, useEffect } from 'react';
// import Components from '@/components';

const user = {
  name: "Leo Dao",
  // imgUrl: "https://unsplash.com/photos/LF8gK8-HGSg",
  imgUrl: "./vercel.svg",
  size: 90,
  desc: "Avatar description"
}

export default function User() {
  // const [isClient, setIsClient] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {setIsClient(true)}, []);

  return (
    <div>
      {/* <h1>{user.name}</h1>
      <Components.Avatar size="xs" src={user.imgUrl} imgW={user.size} imgH={user.size} shortDesc={user.desc} /> */}
      {isLoggedIn ? (<Profile />) : (<Login />)}
    </div>
  )
}