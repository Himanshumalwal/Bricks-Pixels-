import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import Loginpage from "./components/Loginpage";
import { motion } from "framer-motion"

// Create Context
export const ImageContext = createContext();

function App() {
  

  const [searchImage, setSearchImage] = useState('');
  const [islog, setislogin] = useState(false);
  
  
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

// console.log(response)
  return (

    <>
    
      {islog ?  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
      
      <ImageContext.Provider value={value}>

      
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
    </motion.div> :

    <Loginpage islog={islog} setislogin={setislogin}/> 
    }
    
    </>
  );
}

export default App;
