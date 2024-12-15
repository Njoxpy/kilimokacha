import { MarketsContext } from "../context/MarketContext";
import { useContext } from "react";

export const useMarketContext = () => {
    const context = useContext(MarketsContext)

    if (!context) {
        throw new Error("usemarket context must be used inside context provider");
    }

    return context
}