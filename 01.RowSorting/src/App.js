import React from "react";

// Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// config
import { gridOptions } from "./components/gridOptions";

// hooks
import useOnGridReady from "./hooks/useOnGridReady";

function App() {
  const { onGridReady, rowData } = useOnGridReady();

  return (
    <div className="ag-theme-balham" style={{ height: "500px", width: "100%" }}>
      <AgGridReact
        gridOptions={gridOptions}
        rowSelection="multiple"
        onGridReady={onGridReady}
        rowData={rowData}
        animateRows={true}
      />
    </div>
  );
}

export default App;
