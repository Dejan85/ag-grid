import React from "react";
import { AgGridReact } from "ag-grid-react";

const SortOptionsGrid = props => {
  const { gridOptions } = props;

  return (
    <div className="ag-theme-balham" style={{ height: "62px", width: "750px" }}>
      <AgGridReact
        gridOptions={gridOptions}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
};

export default SortOptionsGrid;
