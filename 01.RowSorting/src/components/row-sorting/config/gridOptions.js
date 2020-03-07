export const gridOptions = {
  columnDefs: [
    {
      headerName: "Athlete",
      field: "athlete",
      width: 150
    },
    {
      headerName: "Age",
      field: "age",
      width: 90
    },
    {
      headerName: "Country",
      field: "country",
      width: 150
    },
    {
      headerName: "Year",
      field: "year",
      width: 90
      // sortingOrder: ["asc", "desc"]
    },
    {
      headerName: "Date",
      field: "date",
      width: 100,
      unSortIcon: true
    },
    {
      headerName: "Sport",
      field: "sport",
      width: 150
    }
  ],
  defaultColDef: {
    sortable: true // global sort enable
  },

  sortingOrder: ["asc", "desc", null] // global default method sorting
};

export const defaultSortModel = [
  {
    colId: "athlete",
    sort: "asc"
  }
];
