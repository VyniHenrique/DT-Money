import { HeaderContent, HearderContainer, NewTransactionButton } from "./styles";


import logoImg from "../../assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog";
export function Header () {

	return(
		<HearderContainer>
			<HeaderContent>
				<img src={logoImg} />
				
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<NewTransactionButton> Nova transação</NewTransactionButton>
					</Dialog.Trigger>

					<Dialog.Portal>
						<Dialog.Overlay>
							<Dialog.Content>
								<Dialog.Title>Nova Transação</Dialog.Title>
								<Dialog.Close />
							</Dialog.Content>
						</Dialog.Overlay>
					</Dialog.Portal>
				</Dialog.Root>
			</HeaderContent>
		</HearderContainer>
	)
}