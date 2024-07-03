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

  const [data] = useState([
    {
      invoiceId: "#AHGA61",
      date: "23/09/2022",
      customer: "Jacob",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "26/09/2022",
      customer: "Marcus",
      payableAmount: "$700",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA62",
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
      invoiceId: "#AHGA63",
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
      invoiceId: "#AHGA69",
      date: "22/09/2022",
      customer: "Casandra",
      payableAmount: "$600",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA65",
      date: "28/09/2022",
      customer: "Andrew",
      payableAmount: "$700",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA60",
      date: "30/09/2022",
      customer: "Felcon",
      payableAmount: "$900",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA55",
      date: "34/09/2022",
      customer: "Lucy",
      payableAmount: "$500",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA52",
      date: "31/09/2022",
      customer: "Diana",
      payableAmount: "$300",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA58",
      date: "32/09/2022",
      customer: "Jhon",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA56",
      date: "37/09/2022",
      customer: "kathy",
      payableAmount: "$200",
      paidAmount: "$000",
      due: "$000",
    },
  ]);

  // Customer Filter

  useEffect(() => {
    setFilterData(data);
  }, []);

  useEffect(() => {
    filterCustomer();
  }, [customer]);

  const filterCustomer = () => {
    let res = data?.filter((item) =>
      item?.customer?.toLowerCase().includes(customer?.toLowerCase())
    );
    setFilterData(res);
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
    <div className="w-full h-full flex xsm:mt-[-3rem] md:mt-8 flex-col xsm:gap-2 md:gap-5 items-center">
      <div className="w-full md:h-[30%] xsm:h-auto mt-0">
        <div className="w-full  md:h-[40%]">
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
        <div className="w-full border border-gray-300 overflow-x-scroll h-[83%] dark:bg-gray-700 bg-white">
          <TableComponent sdata={data} filteredData={filterData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
