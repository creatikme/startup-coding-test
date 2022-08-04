interface IHolding {
  financialInstrumentId: number;
  ticker: string;
  name: string;
  score: number;
  holdingPercentage: number;
}

interface IExchange {
  name: string;
  description: string;
}

interface IExchangeLocation {
  name: string;
  description: string;
}

interface ISector {
  name: string;
  description: string;
}

interface IType {
  description: string;
  fund: boolean;
  name: string;
}

interface IFund {
  id: number;
  ticker: string;
  exchange: IExchange;
  name: string;
  impactScore: number;
  previousSharePrice: number;
  sector: ISector;
  industry: any;
  marketCapitalization: number;
  exchangeLocation: IExchangeLocation;
  domestic: boolean;
  uniqueKey: string;
  type: IType;
}

export interface IConstituent {
  holdings: IHolding[];
  fund: IFund;
  holdingsAmount: number;
  currentPage: number;
  totalPages: number;
  totalHoldings: number;
}
