// 'use client';
// import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import Components from '@/components';

const user = {
  name: "Leo Dao",
  // imgUrl: "https://unsplash.com/photos/LF8gK8-HGSg",
  imgUrl: "./vercel.svg",
  size: 90,
  desc: "Avatar description"
}

export default function Profile() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {setIsClient(true)}, []);

  return (
    <div>
      <Components.Avatar src={user.imgUrl} imgW={user.size} imgH={user.size} shortDesc={user.desc} />
    </div>
  )
}