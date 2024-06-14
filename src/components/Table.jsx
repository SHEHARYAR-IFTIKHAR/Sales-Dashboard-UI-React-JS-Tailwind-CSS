import React from "react";

const Table = ({ data, filteredData }) => {
  return (
    <div className="w-full h-full">
      <table className="w-full h-auto px-5">
        <thead className="bg-white h-auto w-full divide-y divide-gray-100 py-4">
          <tr className="w-full shadow dark:bg-gray-700 dark:border-gray-400 border-b">
            <th
              scope="col"
              className="flex dark:text-gray-200 items-center text-lg text-left whitespace-nowrap px-4 py-6 "
            >
              <div className="flex justify-center items-center rounded-md  mr-7 h-6 w-6 border-2 border-gray-300">
                <input
                  className="h-8 w-8 rounded-md outline-none border border-gray-300"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
              Invoice ID
            </th>
            <th
              scope="col"
              className="text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Date
            </th>

            <th
              scope="col"
              className="text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Customer
            </th>

            <th
              scope="col"
              className="text-lg dark:text-gray-200 text-left whitespace-nowrap py-6 pr-3"
            >
              Payable Amount
            </th>
            <th
              scope="col"
              className="text-lg dark:text-gray-200 text-left whitespace-nowrap py-6 pr-3"
            >
              Paid Amount
            </th>
            <th
              scope="col"
              className="text-lg dark:text-gray-200 text-left whitespace-nowrap py-6"
            >
              Due
            </th>
          </tr>
        </thead>

        <tbody className="w-full h-auto dark:divide-gray-700  divide-gray-100 bg-white py-4">
          {filteredData.length > 0
            ? // Display filtered data if available
              filteredData?.map((item) => (
                <tr className="shadow dark:bg-gray-700" key={item.invoiceId}>
                  <td className="flex items-center py-6 text-left whitespace-nowrap text-sm font-medium px-4">
                    <div className="flex justify-center items-center rounded-md  mr-7 h-6 w-6 border-2 border-gray-300">
                      <input
                        className="h-8 w-8 rounded-md outline-none border border-gray-300"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                    <span className="text-lg dark:text-blue-500 text-blue-700">
                      {item.invoiceId}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-6 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.date}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-6 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.customer}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-6 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.payableAmount}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-6 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.paidAmount}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-6 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.due}
                    </span>
                  </td>
                </tr>
              ))
            : //Display all data if no filtering aplied
              data?.map((item) => (
                <tr className="shadow dark:bg-gray-700" key={item.invoiceId}>
                  <td className="flex items-center text-left whitespace-nowrap py-6 text-sm font-medium px-4">
                    <div className="flex justify-center items-center rounded-md  mr-7 h-6 w-6 border-2 border-gray-300">
                      <input
                        className="h-8 w-8 rounded-md outline-none border border-gray-300"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                    <span className="text-lg dark:text-blue-500 text-blue-700">
                      {item.invoiceId}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-4 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.date}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-4 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.customer}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-4 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.payableAmount}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-4 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.paidAmount}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-4 text-left text-sm font-medium pr-4">
                    <span className="text-lg dark:text-gray-300 text-gray-500">
                      {item.due}
                    </span>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
