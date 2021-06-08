import { takeEvery, call, put, all, takeLatest } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
