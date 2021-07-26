import axios from 'axios';
import { useQuery } from 'react-query';

const dataFetch = async (url) => {
  const { data } = await axios.get(`http://localhost:1337${url}`);
  return data;
};
const useDataRequest = (url, queryName) => {
  return useQuery([queryName, url], () => dataFetch(url));
};

export default useDataRequest;
