import api from "./service";


export const getAllAccountSummaryBalanceData = () => dispatch => {
  return api
    .allAccountSummaryBalanceData("https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty")
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
