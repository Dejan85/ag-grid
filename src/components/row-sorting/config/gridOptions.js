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
      width: 90,
      sortingOrder: ["asc", "desc"]
    },
    {
      headerName: "Country",
      field: "country",
      width: 150
    },
    {
      headerName: "Year",
      field: "year",
      width: 90,
      sortingOrder: ["asc", "desc"]
    },
    {
      headerName: "Date",
      field: "date",
      width: 100,
      unSortIcon: true,
      sortingOrder: ["asc", "desc"]
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

  sortingOrder: ["asc", "desc", null], // global default method sorting
  multiSortKey: "ctrl"
};

export const defaultSortModel = [
  {
    colId: "athlete",
    sort: "desc"
  },
  {
    colId: "age",
    sort: "asc"
  },
  {
    colId: "country",
    sort: "asc"
  }
];

export const SortOptionsGridOptions = props => {
  const columnDefs = [];
  const rowData = [];
  const obj = {};

  props.forEach(item => {
    columnDefs.push({ headerName: item.colId, field: item.colId, width: 230 });
    obj[`${item.colId}`] = item.sort;
  });

  rowData.push(obj);
  return { columnDefs, rowData };
};
