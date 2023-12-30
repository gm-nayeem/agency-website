// 'use client'

// import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(() => import('@/components/HydrationTest'), { ssr: false });
// import { useEffect, useState } from 'react';

const Test = () => {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // let a = Math.random();
  // console.log(a);

  console.log('test client side rendering');

  return <div>
    <h1>Hi, I am testing CSR in Next.js</h1>
    {/* {isClient && a} */}
    {/* <HydrationTestNoSSR /> */}
    {/* <div suppressHydrationWarning>{a}</div> */}
  </div>;
};

export default Test;
