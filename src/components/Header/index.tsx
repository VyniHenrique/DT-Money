import { HeaderContent, HearderContainer, NewTransactionButton } from "./styles";

import logoImg from "../../assets/logo.svg"
export function Header () {

	return(
		<HearderContainer>
			<HeaderContent>
				<img src={logoImg} />
				<NewTransactionButton> Nova transação</NewTransactionButton>
			</HeaderContent>
		</HearderContainer>
	)
}