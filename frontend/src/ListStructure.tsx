import React from "react";

const ListStructure = () => {
  return (
    <div className="list-structure h-[90vh] flex">
      <div className="w-1/4 border-r flex justify-center py-6 bg-grey/30">
        <h3 className="text-black">List</h3>
      </div>
      <div className="w-full flex justify-between bg-grey/20">
        <div className="flex text-lg h-16 mx-12 items-center">
          <h3 className="">Detalle</h3>
          <h3 className="text-grey ml-3">Dashboards</h3>
        </div>
        <div className="flex h-16 items-center w-auto justify-end">
          <div className="flex items-center w-80 justify-between mx-6">
            <a href="" className="text-grey">AÑO</a>
            <a href="" className="text-grey">MES</a>
            <a href="" className="text-grey">SEMANA</a>
            <a href="" className="font-bold">DÍA (18)</a>
          </div>
          <div className="border border-grey w-[30vw] h-12 flex items-center justify-center rounded mx-6">
            <h5>Calendar</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStructure;
