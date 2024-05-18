import React from "react";

const ListStructure = () => {
  return (
    <div className="list-structure flex">
      <div className="w-1/4 border-r flex justify-center py-6 bg-grey/30 h-[90vh]">
        <h3 className="text-black">List</h3>
      </div>
      <div className="w-full">
        <div className="flex justify-between bg-grey/20 h-16">
          <div className="flex text-lg h-16 mx-12 items-center">
            <h3 className="">Detalle</h3>
            <h3 className="text-grey ml-3">Dashboards</h3>
          </div>
          <div className="flex h-16 items-center w-auto justify-end">
            <div className="flex items-center w-80 justify-between mx-6">
              <a href="" className="text-grey hover:font-bold">
                AÑO
              </a>
              <a href="" className="text-grey hover:font-bold">
                MES
              </a>
              <a href="" className="text-grey hover:font-bold">
                SEMANA
              </a>
              <a href="" className="font-bold">
                DÍA (18)
              </a>
            </div>
            <div className="border border-white bg-white w-[30vw] h-12 flex items-center justify-center rounded mx-6">
              <h5>Calendar</h5>
            </div>
          </div>
        </div>
        <nav className="flex py-6 px-12 text-xs w-auto justify-between">
          <ul className="flex space-x-4 h-10 items-center">
            <li className="font-bold cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">TODOS</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">TRANSFERIDO</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">NIEGA CONFIRMACION DATOS</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">CLIENTE NO ENCONTRADO EN DB</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">LLAMADO</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">CORTO CLIENTE</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">MAIL ENVIADO</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">INDEFINIDO</li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">NO ENCONTRADO DB</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListStructure;
