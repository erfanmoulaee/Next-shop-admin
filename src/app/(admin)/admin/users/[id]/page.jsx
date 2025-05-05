"use client";
import { useParams } from "next/navigation";

function Page() {
  //get user data based on Id
  const params = useParams();
  console.log(params);
  return <div>page</div>;
}

export default Page;
