import React from "react";
import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Client</h1>
      <button onClick={loadProjectHandler}>Loading Project A</button>
    </div>
  );
};

export default ClientsProjectsPage;
