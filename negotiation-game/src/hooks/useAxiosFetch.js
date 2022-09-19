import { useEffect, useState } from 'react';
import axios from 'axios'

export const useAxiosFetch = (npcUrl, goodsUrl) => {
  const [npcData, setNpcData] = useState([])
  const [goodsData, setGoodsData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchGameAssets = async (npcUrl, goodsUrl) => {
      setIsLoading(true);
      try {
        const npcRes = await axios.get(npcUrl, {
          cancelToken: source.token
        });
        const goodsRes = await axios.get(goodsUrl, {
          cancelToken: source.token
        })

        if(isMounted) {
          setNpcData(npcRes.data.results)
          setGoodsData(goodsRes.data)
        }
      
        console.log('fetched')
      } catch(err) {
        if(isMounted) {
          setFetchError(err.message)
          setNpcData([])
          setGoodsData([])
        }
        
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    fetchGameAssets(npcUrl, goodsUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    }

    return cleanUp;

  }, [npcUrl, goodsUrl])
  
  return { npcData, goodsData, fetchError, isLoading}
}