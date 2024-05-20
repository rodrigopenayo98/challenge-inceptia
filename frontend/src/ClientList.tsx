import React, { useEffect, useState } from "react";
import axios from "axios";

interface Client {
  id: number;
  gestionado: string;
  telefono: string;
  dni: string;
  grupo: string;
  orden: string;
  llamada: string;
  estado: string;
  name: string;
}

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("https://admindev.inceptia.ai/api/v1/clients/", {
          headers: {
            Authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MSwidXNlcm5hbWUiOiJyZWFjdGRldkBpbmljZXB0aWEuYWkiLCJleHAiOjE3MTYzMTQxNjAsImVtYWlsIjoicmVhY3RkZXZAaW5pY2VwdGlhLmFpIiwib3JpZ19pYXQiOjE3MTYyMjc3NjB9.5aEPu5RxqhUcjS81K4Gim1Z0LfnCcpDE2HoHoNNWOlA",
          },
        });
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="border h-[85vh] bg-white p-3 rounded-xl">
      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <ul className="border border-black w-64 p-3 bg-grey hover:bg-black/60 cursor-pointer rounded-md">
          {clients.map((client) => (
            <li className="hover:text-white" key={client.id}>{client.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;




















