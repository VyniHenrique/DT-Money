import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction{
	id: number;
	description: string;
	type: 'income' | 'outcome';
	price: number;
	category: string;
	createdAt: string;
}

interface TransactionContextType{
	transactions: Transaction[];
	fecthTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps{
	children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionProvider( {children}: TransactionProviderProps ){

	const [transactions, setTransactions] = useState<Transaction[]>([])

	async function fecthTransactions (query?: string){
	const response = await api.get('/transactions', {
		params: {
			_sort: 'createdAt', 
			_order: 'desc',
			q: query
		}
	})

		setTransactions(response.data);
	}

	useEffect(() => {
		fecthTransactions();
	}, [])

	return(
		<TransactionsContext.Provider value={{transactions, fecthTransactions}}>
			{children}
		</TransactionsContext.Provider>
	)
}