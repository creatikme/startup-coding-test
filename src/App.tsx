import { useEffect, useState } from "react";
import "./App.css";
import { IConstituent } from "./interfaces/constituents";
import constituentService from "./services/constituent";

function App() {
  
  const [constituents, setConstituents] = useState<IConstituent | null>(null);

  const getData =async ()=>{
   const res =await constituentService.getAll()
   setConstituents(res)
   console.log("data:::",res)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>   
    <div className="cards_list">
         <div className="card">
           <h1> {constituents?.fund.exchange.name }</h1>
           <h6> {constituents?.fund.exchange.description }</h6>
         </div>
         <div className="card">
           <h1> {constituents?.fund.exchangeLocation.name }</h1>
           <h6> {constituents?.fund.exchangeLocation.description }</h6>
         </div>
         <div className="card">
           <h1> {constituents?.fund.sector.name }</h1>
           <h6> {constituents?.fund.sector.description }</h6>
         </div>
    </div>     
    
    <table>
    <thead>

     
    <tr>
          <th>Id</th>
          <th>Ticker</th>
          <th>Name</th>
          <th>Score</th>
          <th>Asset %</th>
        </tr>
    </thead>
    <tbody>

    {constituents && constituents.holdings && constituents.holdings.map((data:any,index:number)=>{
      return(
        <tr key={index}>
        <td>{data.financialInstrumentId}</td>
        <td>{data.ticker}</td>
        <td>{data.name}</td>
        <td>{data.score}</td>
        <td>{data.holdingPercentage}%</td>
       </tr>
      )
    })}
        
            </tbody>
    </table>
    </>
  );
}

export default App;
