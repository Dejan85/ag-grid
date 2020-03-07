import React from "react";

// config
import { gridOptions } from "./config/gridOptions";

// hooks
import useOnGridReady from "./hooks/useOnGridReady";

// grid
import { AgGridReact } from "ag-grid-react";

const RowSorting = () => {
  const { onGridReady, rowData } = useOnGridReady();

  return (
    <div
      className="ag-theme-balham grid"
      style={{ height: "500px", width: "960px" }}
    >
      <AgGridReact
        gridOptions={gridOptions}
        rowSelection="multiple"
        onGridReady={onGridReady}
        rowData={rowData}
        animateRows={true}
      />
    </div>
  );
};

export default RowSorting;
