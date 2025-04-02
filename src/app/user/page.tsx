"use client";
import dynamic from "next/dynamic";

{/* ** in next ** */}
const HugeComponents = dynamic(() => import("./HugeComponents"), { loading: () => <p>loading ...</p> });

{/* ** in react ** */}
// بارگذاری کامپوننت به صورت lazy
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

function UserPage() {
  console.log("parent components");

  return (
    <div className="flex flex-col justify-center items-center mt-6 w-full">
      parent components

      <HugeComponents />

      {/* ** in react ** */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/*  <HugeComponents /> */}
      {/* </Suspense> */}

      other components
    </div>
  );
}

export default UserPage;