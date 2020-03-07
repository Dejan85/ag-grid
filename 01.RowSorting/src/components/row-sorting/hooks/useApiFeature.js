import { useState } from "react";
import {
  defaultSortModel,
  SortOptionsGridOptions
} from "../config/gridOptions";

const useApiFeature = () => {
  const [rowData, setRowData] = useState();
  const [gridApi, setGridApi] = useState();
  const [sort, setSort] = useState();
  const [sortOptionsGridOptions, setSortOptionsGridOptions] = useState();

  // on grid method
  const onGridReady = params => {
    const gridApi = params.api;
    setGridApi(gridApi);

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
    printSortStateToConsole();
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
    printSortStateToConsole();
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
    printSortStateToConsole();
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
    printSortStateToConsole();
  };

  // print sort state to console method
  const printSortStateToConsole = () => {
    const options = gridApi.getSortModel(sort);

    if (sortOptionsGridOptions) {
      return setSortOptionsGridOptions(null);
    }
    setSortOptionsGridOptions(SortOptionsGridOptions(options));
  };

  return {
    sortOptionsGridOptions,
    onGridReady,
    rowData,
    sortByAthleteAsc,
    sortByAthleteDesc,
    sortByCountryThenSport,
    sortBySportThenCountry,
    printSortStateToConsole
  };
};

export default useApiFeature;
