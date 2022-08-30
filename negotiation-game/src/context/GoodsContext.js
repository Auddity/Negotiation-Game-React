import { createContext, useState, useEffect } from "react";
import api from '../api/goods';

const GoodsContext = createContext({});

export const GoodsProvider = ({ children }) => {
  // Place state and handle funcitons here
  const [headerGoods, setHeaderGoods] = useState([])
  
  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await api.get('/goods')
        setHeaderGoods(response.data)
      } catch(err) {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchGoods()
  }, [])

  return (
    <GoodsContext.Provider value={{
      headerGoods
    }} >
      {children}
    </GoodsContext.Provider>
  )
}

export default GoodsContext;