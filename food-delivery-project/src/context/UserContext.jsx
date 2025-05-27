import React, { createContext, useState } from 'react'
import food_items from '../food';
export const dataContext = createContext();
const UserContext = ({ children }) => {
    const [cate, setcate] = useState(food_items)
    const [input, setinput] = useState("");
    const [showcart, setshowcart] = useState(false)
    const data = {
        input,
        setinput,
        cate,
        setcate,
        showcart,
        setshowcart
    };
  return (
          <dataContext.Provider value={data}>
              {children}
          </dataContext.Provider>
  )
}

export default UserContext