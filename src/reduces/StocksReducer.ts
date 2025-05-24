import type { Stocks } from "../types/Stock";

type StocksReducerActions =
    | { type: "ADD"; payload: Stocks }
    | { type: "DELETE"; payload: number }
    | { type: "UPDATE"; payload: Stocks };

const StocksReducer = (state: Stocks[], action: StocksReducerActions): Stocks[] => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "DELETE":
            return state.filter(stock => stock.code !== action.payload);

        case "UPDATE":
            return state.map(originalStock =>
                originalStock.code === action.payload.code
                    ? { ...originalStock, ...action.payload }
                    : originalStock
            );

        default:
            return state;
    }
};

export default StocksReducer;
