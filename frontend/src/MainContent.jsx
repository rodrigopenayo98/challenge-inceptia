import React from "react";
import Client from "./Client.tsx";
import Reports from "./Reports.tsx";
import ListStructure from "./ListStructure.tsx";

const MainContainer = () => {
  return (
    <>
      <div className="bg-black w-full flex">
        <Client />
        <Reports />
      </div>
      <div>
        <ListStructure />
      </div>
    </>
  );
};

export default MainContainer;
