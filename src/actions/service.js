import axios from "axios";


export default {
    allAccountSummaryBalanceData(url) {
        return {
          getAllAccountSummaryBalanceData: data => axios.get(url)
        };
      },
};