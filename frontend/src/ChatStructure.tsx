import React, { useState, useEffect } from "react";
import ClientList from "./ClientList";

interface Case {
  id: number;
  last_updated: string;
  case_uuid: string;
  phone: number;
  extra_metadata: {
    dni: string;
    grupo: string;
    orden: string;
  };
  case_duration: string;
  case_result: {
    name: string;
  };
}

const ChatsStructure = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener los casos
    fetch("https://admindev.inceptia.ai/api/v1/inbound-case/?bot=28", {
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MSwidXNlcm5hbWUiOiJyZWFjdGRldkBpbmljZXB0aWEuYWkiLCJleHAiOjE3MTYzMTQxNjAsImVtYWlsIjoicmVhY3RkZXZAaW5pY2VwdGlhLmFpIiwib3JpZ19pYXQiOjE3MTYyMjc3NjB9.5aEPu5RxqhUcjS81K4Gim1Z0LfnCcpDE2HoHoNNWOlA",
      },
    })
      .then((response) => response.json())
      .then((data) => setCases(data.results))
      .catch((error) => console.error("Error fetching cases:", error));
  }, []);

  return (
    <div className="list-structure flex">
      <div className="w-1/4 border-r flex justify-center py-6 bg-grey/30 h-[90vh]">
        <ClientList />
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
            <li className="font-bold cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              TODOS
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              TRANSFERIDO
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              NIEGA CONFIRMACION DATOS
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              CLIENTE NO ENCONTRADO EN DB
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              LLAMADO
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              CORTO CLIENTE
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              MAIL ENVIADO
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              INDEFINIDO
            </li>
            <li className="cursor-pointer hover:bg-grey/70 hover:text-white h-12 flex items-center px-2 rounded">
              NO ENCONTRADO DB
            </li>
          </ul>
        </nav>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Gestionado</th>
              <th className="py-2 px-4 border-b">ID Caso</th>
              <th className="py-2 px-4 border-b">Teléfono</th>
              <th className="py-2 px-4 border-b">Dni</th>
              <th className="py-2 px-4 border-b">Grupo</th>
              <th className="py-2 px-4 border-b">Orden</th>
              <th className="py-2 px-4 border-b">Llamada</th>
              <th className="py-2 px-4 border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((singleCase) => (
              <tr key={singleCase.id}>
                <td className="py-2 px-4 border-b">
                  {singleCase.last_updated}
                </td>
                <td className="py-2 px-4 border-b">{singleCase.case_uuid}</td>
                <td className="py-2 px-4 border-b">{singleCase.phone}</td>
                <td className="py-2 px-4 border-b">
                  {singleCase.extra_metadata.dni}
                </td>
                <td className="py-2 px-4 border-b">
                  {singleCase.extra_metadata.grupo}
                </td>
                <td className="py-2 px-4 border-b">
                  {singleCase.extra_metadata.orden}
                </td>
                <td className="py-2 px-4 border-b">
                  {singleCase.case_duration}
                </td>
                <td className="py-2 px-4 border-b">
                  {singleCase.case_result.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChatsStructure;
