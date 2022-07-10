import {useEffect, useState} from 'react'

const useSearch = (debounce) => {
    const [results, setResults] = useState([]);

    if (debounce == "" || debounce == null || debounce == undefined) return;
    const getData = async () => {
      const res = await axios.get("", {
        params: {
          srsearch: debounce,
        },
      });
      setResults(res.data.query.search);
    }

    getData()

    return [results, getData]
}