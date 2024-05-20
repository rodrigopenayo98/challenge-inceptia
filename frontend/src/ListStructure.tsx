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
        <div className="m-6">
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
              <tr>
                <td className="py-2 px-4 border-b">Dato 1</td>
                <td className="py-2 px-4 border-b">Dato 2</td>
                <td className="py-2 px-4 border-b">Dato 3</td>
                <td className="py-2 px-4 border-b">Dato 4</td>
                <td className="py-2 px-4 border-b">Dato 5</td>
                <td className="py-2 px-4 border-b">Dato 6</td>
                <td className="py-2 px-4 border-b">Dato 7</td>
                <td className="py-2 px-4 border-b">Dato 8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">Dato 10</td>
                <td className="py-2 px-4 border-b">Dato 11</td>
                <td className="py-2 px-4 border-b">Dato 12</td>
                <td className="py-2 px-4 border-b">Dato 13</td>
                <td className="py-2 px-4 border-b">Dato 14</td>
                <td className="py-2 px-4 border-b">Dato 15</td>
                <td className="py-2 px-4 border-b">Dato 16</td>
                <td className="py-2 px-4 border-b">Dato 17</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Dato 18</td>
                <td className="py-2 px-4 border-b">Dato 19</td>
                <td className="py-2 px-4 border-b">Dato 20</td>
                <td className="py-2 px-4 border-b">Dato 21</td>
                <td className="py-2 px-4 border-b">Dato 22</td>
                <td className="py-2 px-4 border-b">Dato 23</td>
                <td className="py-2 px-4 border-b">Dato 24</td>
                <td className="py-2 px-4 border-b">Dato 25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListStructure;
