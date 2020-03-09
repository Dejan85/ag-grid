import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../../../redux/slice/slice";

// ag grid
import { AgGridReact } from "ag-grid-react";

// config
import { gridOptions } from './config/gridOptions';

const ColumnHeaders = () => {
  const { data } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);


  return (
    <div style={{ width: '100%', height: '120vh' }}>
      <div style={{ height: "100%", width: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: '100%'
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            gridOptions={gridOptions}
            rowSelection="multiple"
            animateRows={true}
            rowData={data}
            sideBar={true}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ColumnHeaders);
