import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


import { FaFileExport } from "react-icons/fa";


const DownloadBtn = ({ data }) => {
  const handleDownloadExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert the data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Write the workbook to binary string
    const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert binary string to ArrayBuffer
    const buf = new ArrayBuffer(workbookBinary.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < workbookBinary.length; i++) {
      view[i] = workbookBinary.charCodeAt(i) & 0xFF;
    }

    // Create a Blob and save it using FileSaver
    const blob = new Blob([buf], { type: 'application/octet-stream' });
    saveAs(blob, 'data.xlsx');
  };

  return (
    <button
      onClick={handleDownloadExcel}
      className=" flex items-center gap-3 px-4 py-2 my-2 hover:underline dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:text-white dark:bg-green-500 hover:text-white hover:bg-green-600 bg-white text-xl text-green-500 rounded font-medium transition"
    >
      Export File <FaFileExport/>
    </button>
  );
};

export default DownloadBtn;
