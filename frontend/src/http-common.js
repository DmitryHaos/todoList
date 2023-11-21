import axios from "axios";

const http = axios.create({
	baseURL: process.env.VUE_APP_BACKEND_URL,		// указание адреса сервера
	headers: {
		"Content-Type": "application/json"			// обмен данными будем осуществлять в формате json
	}
});

export default http;