import { put, TakeEvery, takeLatest, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    console.log(user);
    // const { user } = yield call(createUserProfileDocument, userRef);
    // yield (userActionTypes.GOOGLE_SIGN_IN_SUCCESS, {user});
  } catch (error) {
    yield (userActionTypes.GOOGLE_SIGN_IN_FAILURE, error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart)]);
}
