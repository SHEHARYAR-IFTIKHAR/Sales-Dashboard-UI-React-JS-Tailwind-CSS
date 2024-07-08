import React, { useEffect, useState } from "react";

import SearchSales from "../SearchSales";
import TableComponent from "../TableComponent";
import Table from "../Table";
import DownloadBtn from "../DownloadBtn";

const Dashboard = (props) => {
  const [customer, setCustomer] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterData, setFilterData] = useState([]);

  // let data = ;

  // saved data from local storage
  const [data, setData] = useState([]);

  // Customer Filter

  useEffect(() => {
    let x = localStorage.getItem("tableData");
    let parseX = JSON.parse(x);
    setData(parseX);
    setFilterData(parseX);
  }, []);

  useEffect(() => {
    filterCustomer();
  }, [customer]);

  const filterCustomer = () => {
    let res = data?.filter((item) =>
      item?.customer?.toLowerCase().includes(customer?.toLowerCase())
    );
    setFilterData(res);
    console.log("res result", data, res);
  };

  // Invoice id Filter

  useEffect(() => {
    filterInvoiceId();
  }, [invoiceId]);

  const filterInvoiceId = () => {
    let res = data?.filter((item) =>
      item?.invoiceId?.toLowerCase().includes(invoiceId?.toLowerCase())
    );
    setFilterData(res);
  };

  // Date Filter

  useEffect(() => {
    filterDate();
  }, [date]);

  const filterDate = () => {
    let res = data?.filter((item) =>
      item?.date?.toLowerCase().includes(date?.toLowerCase())
    );
    setFilterData(res);
  };

  // End Date Filter

  useEffect(() => {
    filterEndDate();
  }, [date]);

  const filterEndDate = () => {
    let res = data?.filter((item) =>
      item?.date?.toLowerCase().includes(date?.toLowerCase())
    );
    setFilterData(res);
  };

  return (
    <div className="w-full h-full flex xsm:mt-[-3rem] sm:!mt-[6rem] lg:!mt-8 lg:overflow-hidden flex-col xsm:gap-2 md:gap-5 items-center -bg-green-400">
      <div className="w-full md:h-[30%] xsm:h-auto mt-0 -bg-green-800">
        <div className="w-full md:h-[40%] -bg-yellow-500">
          <strong className="xsm:text-xl md:text-3xl dark:text-gray-300">
            Sales Information
          </strong>
        </div>

        <div className="w-full h-[60%] xsm:h-auto justify-between xsm:flex-wrap md:flex-nowrap flex gap-4">
          <div className="w-[50%] xsm:text-lg xsm:w-full h-full xsm:flex-wrap sm:flex-nowrap flex justify-between gap-4">
            <SearchSales
              className="xsm:text-lg md:text-xl"
              plceh="Enter Customer Name"
              brand="Customer"
              filterValue={customer}
              setFilterValue={setCustomer}
            />
            <SearchSales
              className="xsm:text-lg md:text-xl"
              plceh="Enter Invoice ID"
              brand="Invoice ID"
              filterValue={invoiceId}
              setFilterValue={setInvoiceId}
            />
          </div>
          <div className="w-[50%] xsm:w-full h-full xsm:flex-wrap sm:flex-nowrap flex justify-between gap-4">
            <SearchSales
              className="xsm:text-lg md:text-xl"
              plceh="Start Date"
              brand="Start Date"
              filterValue={date}
              setFilterValue={setDate}
            />
            <SearchSales
              className="xsm:text-lg md:text-xl"
              plceh="End Date"
              brand="End Date"
              filterValue={endDate}
              setFilterValue={setEndDate}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:mt-[2rem] xsm:h-[36rem]">
        <div className="w-full  flex justify-end !items-center">
          <DownloadBtn data={data} />
        </div>
        <div className="w-full border border-gray-300 xsm:!overflow-x-auto !overflow-y-auto lg:!overflow-x-hidden sm:mt-5 xsm:h-[85%] lg:h-[60%] dark:bg-gray-700 bg-white">
          <TableComponent sdata={data} filteredData={filterData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
