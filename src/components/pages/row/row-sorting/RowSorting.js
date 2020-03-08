import React, { memo } from "react";

// config
import { gridOptions } from "./config/gridOptions";

// hooks
import useApiFeature from "./hooks/useApiFeature";

// grid
import { AgGridReact } from "ag-grid-react";

// copmonents
import SortOptionsGrid from "./SortOptionsGrid";

const RowSorting = () => {
  const {
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
  } = useApiFeature();

  return (
    <div className="grid">
      <div>
        <div
          className="ag-theme-balham"
          style={{ height: "500px", width: "750px" }}
        >
          <div className="grid__button-holder">
            <button onClick={sortByAthleteAsc}>Athlete Ascending</button>
            <button onClick={sortByAthleteDesc}>Athlete Descending</button>
            <button onClick={sortByCountryThenSport}>
              Country, then Sport
            </button>
            <button onClick={sortBySportThenCountry}>Sport then Country</button>
            <button onClick={printSortStateToConsole}>
              {sortOptionsGridOptions
                ? "Disabled sort options table"
                : "Sort options table"}
            </button>
            <button onClick={clearSort}>Clear sort</button>
            <button onClick={saveSortOptions}>Save sort</button>
            <button onClick={restoreFromSave}>Restore from save</button>
            <button onClick={removeAllSetings}>Remove all setings</button>
          </div>
          <div className="grid__sort-options">
            {sortOptionsGridOptions && (
              <SortOptionsGrid gridOptions={sortOptionsGridOptions} />
            )}
          </div>
          <AgGridReact
            gridOptions={gridOptions}
            rowSelection="multiple"
            onGridReady={onGridReady}
            rowData={rowData}
            animateRows={true}
            postSort={postSort}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(RowSorting);
