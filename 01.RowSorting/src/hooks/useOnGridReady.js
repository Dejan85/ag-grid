import { useState } from "react";
import { defaultSortModel } from "../components/gridOptions";

const useOnGridReady = () => {
  const [rowData, setRowData] = useState();

  const onGridReady = params => {
    const gridApi = params.api;
    // const gridColumnApi = params.columnApi;

    fetch(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    )
      .then(res => res.json())
      .then(response => {
        setRowData(response);
      })
      .catch(error => {
        console.log(error);
      });

    gridApi.setSortModel(defaultSortModel); // when grid load, defaul sorting method
  };

  return { onGridReady, rowData };
};

export default useOnGridReady;
