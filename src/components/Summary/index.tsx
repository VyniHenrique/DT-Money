import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";

export function Summary (){

	const { transactions} = useContext(TransactionsContext);

	console.log(transactions);

	return(
		<SummaryContainer>
			 
			 <SummaryCard>
				<header>
					<span>Entradas</span>
					<ArrowCircleUp size={32} color="#00b37e"/>
				</header>
				<strong>R$ 17.000,00</strong>
			 </SummaryCard>


			 <SummaryCard>
				<header>
					<span>Saídas</span>
					<ArrowCircleDown size={32} color="#f75a68"/>
				</header>

			
				<strong>R$ 1.300,59</strong>
			 </SummaryCard>


			 <SummaryCard variant="green">
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color="#fff"/>
				</header>
				
				<strong>R$ 15.699,41</strong>
			 </SummaryCard>

		</SummaryContainer>
	)
}