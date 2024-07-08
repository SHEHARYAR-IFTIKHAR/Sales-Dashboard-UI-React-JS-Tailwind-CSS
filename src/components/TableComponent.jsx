// src/Table.js
import React, { useState, useEffect } from "react";
import {
  saveDataToLocalStorage,
  loadDataFromLocalStorage,
} from "../utils/LocalStorage";

import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableComponent = ({ sdata, filteredData }) => {
  const [data, setData] = useState(() => {
    const savedData = loadDataFromLocalStorage("tableData");
    return (
      savedData || [
        {
          invoiceId: "#AHGA59",
          date: "23/09/2022",
          customer: "Sheharyar",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA61",
          date: "23/09/2022",
          customer: "Jacob",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA62",
          date: "26/09/2022",
          customer: "Marcus",
          payableAmount: "$700",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA63",
          date: "24/09/2022",
          customer: "Williom",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA64",
          date: "27/09/2022",
          customer: "Petter",
          payableAmount: "$400",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA65",
          date: "21/09/2022",
          customer: "Thomas",
          payableAmount: "$200",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA66",
          date: "29/09/2022",
          customer: "Julia",
          payableAmount: "$800",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA67",
          date: "22/09/2022",
          customer: "Casandra",
          payableAmount: "$600",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA68",
          date: "28/09/2022",
          customer: "Andrew",
          payableAmount: "$700",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA69",
          date: "30/09/2022",
          customer: "Felcon",
          payableAmount: "$900",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA70",
          date: "34/09/2022",
          customer: "Lucy",
          payableAmount: "$500",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA71",
          date: "31/09/2022",
          customer: "Diana",
          payableAmount: "$300",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA72",
          date: "32/09/2022",
          customer: "Jhon",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA73",
          date: "37/09/2022",
          customer: "kathy",
          payableAmount: "$200",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA74",
          date: "23/09/2022",
          customer: "Jacob",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA75",
          date: "26/09/2022",
          customer: "Marcus",
          payableAmount: "$700",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA76",
          date: "24/09/2022",
          customer: "Williom",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA77",
          date: "27/09/2022",
          customer: "Petter",
          payableAmount: "$400",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA78",
          date: "21/09/2022",
          customer: "Thomas",
          payableAmount: "$200",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA79",
          date: "29/09/2022",
          customer: "Julia",
          payableAmount: "$800",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA80",
          date: "22/09/2022",
          customer: "Casandra",
          payableAmount: "$600",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA81",
          date: "28/09/2022",
          customer: "Andrew",
          payableAmount: "$700",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA82",
          date: "30/09/2022",
          customer: "Felcon",
          payableAmount: "$900",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA83",
          date: "34/09/2022",
          customer: "Lucy",
          payableAmount: "$500",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA84",
          date: "31/09/2022",
          customer: "Diana",
          payableAmount: "$300",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA85",
          date: "32/09/2022",
          customer: "Jhon",
          payableAmount: "$100",
          paidAmount: "$000",
          due: "$000",
        },
        {
          invoiceId: "#AHGA86",
          date: "37/09/2022",
          customer: "kathy",
          payableAmount: "$200",
          paidAmount: "$000",
          due: "$000",
        },
      ]
    );
  });

  // const fdata = filteredData;

  const [editIdx, setEditIdx] = useState(-1);

  useEffect(() => {
    saveDataToLocalStorage("tableData", data);
  }, [data]);

  const handleEdit = (index) => {
    setEditIdx(index);
  };

  const handleSave = () => {
    setEditIdx(-1);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, idx) => idx !== index);
    setData(newData);
  };

  const handleChange = (e, index, key) => {
    const { value } = e.target;
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  return (
    <div className="xsm:w-[85rem] h-auto lg:w-full flex justify-center">
      <table className="w-full h-full flex justify-center items-center flex-col -shadow-md">
        <thead className="w-full">
          <tr className="w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b">
            <th className="flex justify-center items-center px-4 py-4">
              <div className="flex justify-center items-center rounded-md ml-4  mr-7 h-6 w-6">
                <input
                  className="h-8 w-8 rounded-md outline-none"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </th>
            <th
              scope="col"
              className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6 "
            >
              Invoice ID
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Date
            </th>

            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Customer
            </th>

            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6 pr-3"
            >
              Payable Amount
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6 pr-3"
            >
              Paid Amount
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Due
            </th>
            <th
              scope="col"
              className="w-full text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="w-full overflow-x-scroll">
          {filteredData.length > 0
            ? filteredData.map((row, index) => (
                <tr
                  key={index}
                  className="w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b"
                  // className={`w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b hover:bg-gray-50 ${index === 0 ? 'text-blue-500' : ''}`}
                >
                  {/* border w-10 h-16 flex items-center justify-start */}
                  <td className="flex justify-center items-center px-4 py-4 ">
                    <div className="flex justify-center items-center rounded-md ml-4  mr-7 h-6 w-6 ">
                      <input
                        className="h-8 w-8 rounded-md  outline-none "
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </td>
                  {Object.keys(row).map((key, colIndex) => (
                    <td
                      key={colIndex}
                      // className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6"

                      className={`w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-6 py-4  ${
                        colIndex === 0 ? "text-blue-600" : ""
                      }`}
                    >
                      {editIdx === index ? (
                        <input
                          type="text"
                          value={row[key]}
                          onChange={(e) => handleChange(e, index, key)}
                          // className="border rounded-md px-2 dark:bg-gray-600 w-32 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"

                          className={`border rounded-md px-1 py-1 dark:bg-gray-600 w-[80px] text-[12px] focus:outline-none focus:ring-2 ${
                            colIndex === 0
                              ? "text-blue-600"
                              : "focus:ring-blue-500"
                          }`}
                        />
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}
                  <td className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6">
                    {editIdx === index ? (
                      <button
                        onClick={handleSave}
                        className="bg-green-500 shadow-md text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500"
                      >
                        <FaSave />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-green-500 shadow-md text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500"
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-400 shadow-md text-red-700 px-4 py-2 ml-2 rounded-md hover:text-red-200 hover:bg-red-600"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            : data.map((row, index) => (
                <tr
                  key={index}
                  className="w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b"
                  // className={`w-full flex shadow dark:bg-gray-700 dark:border-gray-400 border-b hover:bg-gray-50 ${index === 0 ? 'text-blue-500' : ''}`}
                >
                  {/* border w-10 h-16 flex items-center justify-start */}
                  <td className="flex justify-center items-center px-4 py-4 ">
                    <div className="flex justify-center items-center rounded-md ml-4  mr-7 h-6 w-6 ">
                      <input
                        className="h-8 w-8 rounded-md  outline-none "
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </td>
                  {Object.keys(row).map((key, colIndex) => (
                    <td
                      key={colIndex}
                      // className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6"

                      className={`w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-6 py-4  ${
                        colIndex === 0 ? "text-blue-600" : ""
                      }`}
                    >
                      {editIdx === index ? (
                        <input
                          type="text"
                          value={row[key]}
                          onChange={(e) => handleChange(e, index, key)}
                          // className="border rounded-md px-2 dark:bg-gray-600 w-32 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"

                          className={`border rounded-md px-1 py-1 dark:bg-gray-600 w-[80px] text-[12px] focus:outline-none focus:ring-2 ${
                            colIndex === 0
                              ? "text-blue-600"
                              : "focus:ring-blue-500"
                          }`}
                        />
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}
                  <td className="w-full flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6">
                    {editIdx === index ? (
                      <button
                        onClick={handleSave}
                        className="bg-green-500 shadow-md text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500"
                      >
                        <FaSave />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-green-500 shadow-md text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-500"
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-400 shadow-md text-red-700 px-4 py-2 ml-2 rounded-md hover:text-red-200 hover:bg-red-600"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}

          {/* {filteredData.length > 0 ? (
        // Display filtered data if available
        filteredData?.map(item => (
            // data
          ))
        ) : (
          //Display all data if no filtering aplied
          data?.map(item => (
            // data 
          ))
        )} */}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
