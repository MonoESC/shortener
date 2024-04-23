import React from "react";
import { RedirectionCard } from "./RedirectionCard";

const RedirectionList = ({ data }) => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex border p-4 rounded-md items-center justify-between">
        <div>Id</div>
        <div>Name</div>
        <div>Description</div>
        <div>Code</div>
        <div>Redirect to</div>
      </div>
      {data &&
        data.map((redir) => <RedirectionCard key={redir.id} data={redir} />)}
    </div>
  );
};

export default RedirectionList;
