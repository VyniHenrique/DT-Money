import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;


export function NewTransactionModal (){

	const { register, handleSubmit, formState: {isSubmitting}, control, reset } = useForm<NewTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema)
	})

async function HandleCreateNewTransaction(data: NewTransactionFormInputs){
	await api.post('transactions', {
		description: data.description,
		category: data.category,
		price: data.price,
		type: data.type,
		createdAt: new Date(),
	})

	reset();
}
	return (
		<Dialog.Portal>

			<Overlay />
			<Content>

				<Dialog.Title>Nova Transação</Dialog.Title>

				<CloseButton>
					<X size={24}/>
				</CloseButton>
				<form onSubmit={handleSubmit(HandleCreateNewTransaction)}>
					<input 
						type="text" 
						placeholder="Descrição" 
						required
						{...register('description')}
					/>
					<input 
						type="number" 
						placeholder="Preço" 
						required
						{...register('price', { valueAsNumber: true })}
					/>
					<input 
						type="text" 
						placeholder="Categoria" 
						required
						{...register('category')}
					/>
						
					<Controller 
						control={control}
						name="type"
						render={({ field }) => {
							return(
								<TransactionType onValueChange={ field.onChange}>
									<TransactionTypeButton variant="income" value="income">
										<ArrowCircleUp size={24}/>
										Entrada							
									</TransactionTypeButton>
			
									<TransactionTypeButton variant="outcome" value="outcome" >
										<ArrowCircleDown size={24}/>
										Saída							
									</TransactionTypeButton>
								</TransactionType>
		
							)
						}}
					/>
					<button type="submit" disabled={isSubmitting}>
						Cadastrar
					</button>
				</form>
				
			</Content>
	</Dialog.Portal>
	)
}