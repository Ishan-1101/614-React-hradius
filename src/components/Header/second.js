import React, { useEffect, useState } from "react";
import { getData } from "../../services/data";
import { DataGrid } from "@mui/x-data-grid";
import "./second.css";
import Buttons from "./Buttons";

const columns = [
  { field: "sl_no", headerName: "Sl no", width: 50 },
  { field: "business_code", headerName: "Business Code", width: 120 },
  { field: "cust_number", headerName: "Cust Number", width: 120 },
  { field: "clear_date", headerName: "Clear Date", width: 120 },
  { field: "buisness_year", headerName: "Buisness Year", width: 120 },
  { field: "doc_id", headerName: "Doc Id", width: 120 },
  { field: "posting_date", headerName: "Posting Date", width: 120 },
  {
    field: "document_create_date",
    headerName: "Document Create Date",
    width: 120,
  },
  { field: "due_in_date", headerName: "Due Date", width: 120 },
  { field: "invoice_currency", headerName: "Invoice Currency", width: 120 },
  { field: "document_type", headerName: "Document Type", width: 120 },
  { field: "posting_id", headerName: "Posting Id", width: 120 },
  { field: "total_open_amount", headerName: "Total Open Amount", width: 120 },
  {
    field: "baseline_create_date",
    headerName: "Baseline Create Date",
    width: 120,
  },
  { field: "cust_payment_terms", headerName: "Cust Payment Terms", width: 120 },
  { field: "invoice_id", headerName: "Invoice Id", width: 120 },
];

export default function Second() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setData(await getData());
    }
    fetchData();
  }, []);
  return (
    <>
    <Buttons />
      <div style={{ height: 350, width: "100%" }} className="container">
        <DataGrid
          disableExtendRowFullWidth={true}
          rows={data}
          getRowId={(r) => r.sl_no}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          checkboxSelection
          disableSelectionOnClick
          rowHeight={40}
          style={{ color: "white" }}
        />
      </div>
    </>
  );
}
