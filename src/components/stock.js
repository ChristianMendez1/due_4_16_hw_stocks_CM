import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function StockSymbol (props) {
    const [stockSymbol, setStockSymbol] = useState(null); 
    const params = useParams()
    const symbol = params.symbol
    const apiKey = "69860af27f8400de88f48bbf826f6298";
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

  useEffect(() => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setStockSymbol(data)
        });
  }, []);

    
    return (
      <div>
        <h1>
            Name: {stockSymbol && stockSymbol[0].name}
        </h1>
        <h1>
            Price: {stockSymbol && stockSymbol[0].price}
        </h1>
      </div>
    );
  };