import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Max" },
    { id: "matt", name: "Matt" },
    { id: "mark", name: "Mark" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* alternative */}
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
