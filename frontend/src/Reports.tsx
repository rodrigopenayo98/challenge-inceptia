import React from "react";

const Reports = () => {
  return (
    <div className="reports flex my-3 mx-6 items-center justify-between w-3/4">
      <h2 className="text-lg text-white font-bold">Reports</h2>
      <div className="w-full relative flex items-center justify-end mr-32">
        <input
          type="text"
          className="h-10 w-1/4 rounded-md px-4"
          placeholder="ID Caso, ID Cliente o Tel"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill=""
          className="h-6 fill-grey absolute right-0 top-2 right-2"
          viewBox="0 0 24 24"
        >
          <title>magnify</title>
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
      </div>
    </div>
  );
};

export default Reports;
