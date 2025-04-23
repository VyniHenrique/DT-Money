import axios from "axios";

export const api = axios.create({
	baseURL: 'https://json-server-dt-money-gray.vercel.app/transactions'
	
});
