import axios from "axios";
import { IConstituent } from "../interfaces/constituents";

// interface GetConstituentsResponse {
//   data: IConstituent[];
// }

class constituentService {
  async getAll() {
    const { data } = await axios.get<IConstituent>(
      "https://api.inspireinsight.com/api/tickers/1784/constituents?size=100"
    );
    return data;
  }
}

export default new constituentService();
