import { useState } from "react";
import {
  defaultSortModel,
} from "../config/gridOptions";

const useApiFeature = data => {
  const [gridApi, setGridApi] = useState();

  // on grid method
  const onGridReady = params => {
    const gridApi = params.api;
    setGridApi(gridApi);

    gridApi.setSortModel(defaultSortModel); // when grid load, defaul sorting method
  };


  return {
    onGridReady
  };
};

export default useApiFeature;
