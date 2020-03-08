import { put, takeLatest } from "redux-saga/effects";
import { dataReducer, getDataAction } from "../slice/slice";

function* getDataHandler() {
  const url =
    "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json";
  let result;
  yield fetch(url)
    .then(res => res.json())
    .then(response => {
      result = response;
    })
    .catch(err => console.log(err));
  yield put(dataReducer(result));
}

export function* fetchData() {
  yield takeLatest(getDataAction.type, getDataHandler);
}
