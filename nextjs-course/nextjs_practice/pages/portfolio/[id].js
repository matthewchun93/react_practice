import React from "react";
import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  // send a request to backend server to
  // fetch the data attached to the id of router.query.id
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;
