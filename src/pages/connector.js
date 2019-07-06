import { getAllAccountSummaryBalanceData } from "../actions/DashboardData";

export const mapStateToProps = state => {
  return {
    newData: state.dashboardReducer,

  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getAllAccountSummaryBalanceData: () => dispatch(getAllAccountSummaryBalanceData()),

  };
};