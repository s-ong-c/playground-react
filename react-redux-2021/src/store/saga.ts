import { takeEvery, call, put } from 'redux-saga/effects';

import { apiEmployees } from '@/api/modules/employee';

function* fetch() {
  try {
    const employees = yield call(apiEmployees);
    yield put({
      type: 'EMPLOYEES_FETCH_SUCCESS',
      payload: { employees: employees.data },
    });
  } catch (e) {
    yield put({
      type: 'EMPLOYEES_FETCH_FAILURE',
      payload: { message: e.message },
    });
  }
}

export default function* employeeSaga() {
  yield takeEvery('EMPLOYEES_FETCH_REQUEST', fetch);
}
