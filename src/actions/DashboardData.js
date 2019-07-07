import api from "./service";


export const getAllAccountSummaryBalanceData = () => dispatch => {
  dispatch({ type: "GET_LOADING_STATUS" });
  return api
    .allAccountSummaryBalanceData("https://api.myjson.com/bins/km0lf")
    .getAllAccountSummaryBalanceData("data")
    .then(res => {
        return dispatch({
          type: "ACCOUNT_DATA_ALL",
          value: res.data
        });
     
    })
    .catch(err => {
      // return dispatch({
      //   type: "ACCOUNT_SUMMARY_BALANCE_DATA_ERROR",
      //   value: "error"
      // });
    });
};
