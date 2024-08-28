import axios from 'axios'


export async function getStats() {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl'
    },
    headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
	const response = await axios.request(options);
  return response?.data
  } catch (error) {
    console.error(error);
  }

}



export async function getCryptoCurrencies() {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '100',
      offset: '0'
    },
    headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
	const response = await axios.request(options);
  return response?.data
  } catch (error) {
    console.error(error);
  }

}