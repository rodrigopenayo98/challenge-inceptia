import React, { useState, useEffect } from "react";
import ClientList from "./ClientList";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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

  useEffect(() => {
    flatpickr("#start-date", {
      dateFormat: "Y-m-d",
    });

    flatpickr("#end-date", {
      dateFormat: "Y-m-d",
    });
  }, []);

  return (
    <div className="list-structure flex overflow-hidden h-[90vh]">
      <div className="w-1/4 border-r flex justify-center py-6 bg-grey/30 h-[90vh]">
        <ClientList />
      </div>
      <div className="w-full overflow-y-auto ovwerflow-hidden">
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
            <div date-rangepicker className="flex items-center mx-3">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="start-date"
                  name="start"
                  type="text"
                  className="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                />
              </div>
              <span className="mx-4 text-gray-500">hasta</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="end-date"
                  name="end"
                  type="text"
                  className="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-black dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div>
          </div>
        </div>
        <nav className="flex py-6 px-12 text-xs w-auto justify-between">
          <ul className="flex space-x-4 h-2 items-center">
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
          <tbody className="border border-black">
            {cases.map((singleCase) => (
              <tr key={singleCase.id} className="h-auto hover:bg-black/80 hover:text-white cursor-pointer">
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

