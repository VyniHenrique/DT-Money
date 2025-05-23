import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionContext";

const searchFormSchema = z.object({
	query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm (){
	const { fecthTransactions } = useContext(TransactionsContext)

	const {register, handleSubmit, formState: { isSubmitting}} = useForm<searchFormInputs>({
		resolver: zodResolver(searchFormSchema)
	})
	
	async function handleSearchTransactions (data: searchFormInputs){
		await fecthTransactions(data.query)
	}

	return(
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input 
				type="text" 
				placeholder="Busque uma transação" 
				{...register('query')}
			/>

			<button type="submit" disabled={isSubmitting}>
				<MagnifyingGlass size={20} />
				Buscar
			</button>
		</SearchFormContainer>
	);
}