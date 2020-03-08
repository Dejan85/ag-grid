import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../../../../../redux/slice/slice";
import {
  defaultSortModel,
  SortOptionsGridOptions
} from "../config/gridOptions";

const useApiFeature = () => {
  const [rowData, setRowData] = useState();
  const [gridApi, setGridApi] = useState();
  const [sort, setSort] = useState();
  const [sortOptionsGridOptions, setSortOptionsGridOptions] = useState();
  const dispatch = useDispatch();
  const { data } = useSelector(state => state);

  // on grid method
  const onGridReady = params => {
    const gridApi = params.api;
    setGridApi(gridApi);

    dispatch(getDataAction());
    setRowData(data);

    console.log(data);

    gridApi.setSortModel(defaultSortModel); // when grid load, defaul sorting method
  };

  // sort by athlete asc method
  const sortByAthleteAsc = () => {
    const sort = [
      {
        colId: "athlete",
        sort: "asc"
      }
    ];

    setSort(sort);
    gridApi.setSortModel(sort);
    setSortOptionsGridOptions(null);
  };

  // sort by Athlete desc method
  const sortByAthleteDesc = () => {
    const sort = [
      {
        colId: "athlete",
        sort: "desc"
      }
    ];
    setSort(sort);
    gridApi.setSortModel(sort);
    setSortOptionsGridOptions(null);
  };

  // sort by country then sport method
  const sortByCountryThenSport = () => {
    const sort = [
      {
        colId: "country",
        sort: "asc"
      },
      {
        colId: "sport",
        sort: "asc"
      }
    ];
    setSort(sort);
    gridApi.setSortModel(sort);
    setSortOptionsGridOptions(null);
  };

  // sort by sport then country method
  const sortBySportThenCountry = () => {
    const sort = [
      {
        colId: "sport",
        sort: "asc"
      },
      {
        colId: "country",
        sort: "asc"
      }
    ];
    setSort(sort);
    gridApi.setSortModel(sort);
    setSortOptionsGridOptions(null);
  };

  // show sort options table method
  const printSortStateToConsole = () => {
    const options = gridApi.getSortModel(sort);
    // console.log(sort);

    if (sortOptionsGridOptions) {
      return setSortOptionsGridOptions(null);
    }

    setSortOptionsGridOptions(SortOptionsGridOptions(options));
  };

  // clear sort state method
  const clearSort = () => {
    gridApi.setSortModel(null);
    setSortOptionsGridOptions(null);
  };

  // save sort method
  const saveSortOptions = () => {
    const options = gridApi.getSortModel();
    localStorage.setItem("grid-options", JSON.stringify(options));
    setSortOptionsGridOptions(null);
  };

  // restore from save method
  const restoreFromSave = () => {
    const options = localStorage.getItem("grid-options");
    gridApi.setSortModel(JSON.parse(options));
    setSortOptionsGridOptions(null);
  };

  // remove all setings
  const removeAllSetings = () => {
    localStorage.removeItem("grid-options");
    clearSort();
  };

  // post sort method
  const postSort = rowNodes => {
    function isIreland(node) {
      return node.data.country === "Ireland";
    }

    function move(toIndex, fromIndex) {
      rowNodes.splice(toIndex, 0, rowNodes.splice(fromIndex, 1)[0]);
    }

    let nextInsertPos = 0;

    for (let i = 0; i < rowNodes.length; i++) {
      if (isIreland(rowNodes[i])) {
        move(nextInsertPos, i);
        nextInsertPos++;
      }
    }
  };

  return {
    sortOptionsGridOptions,
    onGridReady,
    rowData,
    sortByAthleteAsc,
    sortByAthleteDesc,
    sortByCountryThenSport,
    sortBySportThenCountry,
    printSortStateToConsole,
    clearSort,
    saveSortOptions,
    restoreFromSave,
    removeAllSetings,
    postSort
  };
};

export default useApiFeature;
