import {stocks} from "./data.js"
import {Link} from "react-router-dom";

export default function Dashboard() {

    const stocksymbolmap = stocks.map((stock) => {
        const {name, symbol} = stock;
        return(
            <Link to={`/stocks/${symbol}`}>
                <li id='stockname'>{name}</li>
            </Link>
        )
    })
    return (
        <div id='dashboard'>
            {stocksymbolmap}
        </div>
    )
}