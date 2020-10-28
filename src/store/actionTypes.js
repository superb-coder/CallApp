// const mirrorKeys = item =>
//   Object.keys(item).reduce((result, prop) => {
//     result[prop] = prop;

//     return result;
//   }, {});
// const ActionTypes = mirrorKeys({
//   SET_MY_CONTACT_NAME: null,
//   SET_MY_CONTACT_STATE: null,
//   SET_MY_CONTACT_CITY: null,
//   SET_MY_CONTACT_INDUSTRY: null,

//   SET_SEARCH_COMPANY_NAME: null,
//   SET_SEACH_STATE_REGION: null,
//   SET_SEARCH_CITY: null,
// });

const ActionTypes = {
  SET_MY_CONTACT_PHONE: 'SET_MY_CONTACT_PHONE',
  SET_MY_CONTACT_NAME: 'SET_MY_CONTACT_NAME',
  SET_MY_CONTACT_STATE: 'SET_MY_CONTACT_STATE',
  SET_MY_CONTACT_CITY: 'SET_MY_CONTACT_CITY',
  SET_MY_CONTACT_INDUSTRY: 'SET_MY_CONTACT_INDUSTRY',
  ADD_CONTACT: 'ADD_CONTACT',
  EDIT_CONTACT: 'EDIT_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',

  LOAD_INDUSTRIES: 'LOAD_INDUSTRIES',
  LOAD_INDUSTRIES_SUCCESS: 'LOAD_INDUSTRIES_SUCCESS',
  LOAD_INDUSTRIES_FAIL: 'LOAD_INDUSTRIES_FAIL',

  LOAD_SEARCH: 'LOAD_SEARCH',
  LOAD_SEARCH_SUCCESS: 'LOAD_SEARCH_SUCCESS',
  LOAD_SEARCH_FAIL: 'LOAD_SEARCH_FAIL',
  LOAD_MORE_SEARCH: 'LOAD_MORE_SEARCH',
  LOAD_MORE_SEARCH_SUCCESS: 'LOAD_MORE_SEARCH_SUCCESS',
  LOAD_MORE_SEARCH_FAIL: 'LOAD_MORE_SEARCH_FAIL',

  SET_SEARCH_COMPANY_NAME: 'SET_SEARCH_COMPANY_NAME',
  SET_SEACH_STATE_REGION: 'SET_SEACH_STATE_REGION',
  SET_SEARCH_CITY: 'SET_SEARCH_CITY',

  CALL_START: 'CALL_START',
  CALL_END: 'CALL_END',
  CALL_STATUS_CHANGE: 'CALL_STATUS_CHANGE',

  SET_RECENT_CALL: 'SET_RECENT_CALL',
  UPDATE_RECENT_CALL: 'UPDATE_RECENT_CALL',
};

export default ActionTypes;