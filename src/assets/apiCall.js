export const apiCall = async(url) => {
	const response = await fetch(url,{
		method: "GET"
	});
	return response.json();
};
