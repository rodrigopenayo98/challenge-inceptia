import React from "react";
import ClientContainer from "./ClientContainer.tsx";
import Reports from "./Reports.tsx";
import ChatStructure from "./ChatStructure.tsx";

const MainContainer = () => {
  return (
    <>
      <div className="bg-black w-full flex">
        <ClientContainer />
        <Reports />
      </div>
      <div>
        <ChatStructure />
      </div>
    </>
  );
};

export default MainContainer;
