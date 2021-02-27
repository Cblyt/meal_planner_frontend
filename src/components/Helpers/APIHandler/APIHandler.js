import axios from 'axios';

const APIRequest = async (type, url, params, config) => {
	const newUrl = `http://localhost:8000${url}`;

	const response = await axios[type](newUrl, params, config);
	return response;
};

export default APIRequest;
