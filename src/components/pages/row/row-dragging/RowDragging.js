import React, { memo } from "react";

// grid
import { AgGridReact } from "ag-grid-react";

const RowDragging = () => {
  return (
    <div
      className="ag-theme-balham"
      style={{ height: "500px", width: "750px" }}
    >
      <AgGridReact />
    </div>
  );
};

export default memo(RowDragging);
