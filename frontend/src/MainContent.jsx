import React from 'react';
import Client from './Client.tsx';
import Reports from './Reports.tsx';

const MainContainer = () => {
  return (
    <div className="bg-black w-full flex">
      <Client />
      <Reports />
    </div>
  );
}

export default MainContainer;


