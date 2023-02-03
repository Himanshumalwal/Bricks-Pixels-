import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import Loginpage from "./components/Loginpage";

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

  return (

    <>
    
      {islog ? <ImageContext.Provider value={value}>
      
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider> :
    <Loginpage islog={islog} setislogin={setislogin}/> 
    }
    
    </>
  );
}

export default App;
