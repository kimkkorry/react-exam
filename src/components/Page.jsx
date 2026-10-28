import { useEffect } from "react";

function Page() {
  useEffect(() => {
    console.log("페이지 로딩...");
  }, []); 

  return <h3>페이지</h3>;
}

export default Page;
