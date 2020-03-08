import { put, takeLatest } from "redux-saga/effects";
import { dataReducer, getDataAction } from "../slice/slice";

function* getDataHandler() {
  console.log("radi");
}

export function* fetchData() {
  yield takeLatest(getDataAction.type, getDataHandler);
}
