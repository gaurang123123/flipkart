import {createContext, useState,useEffect} from 'react';

export const DataContext = createContext(null);

const DataProvider =({children}) =>{
    const [account,setAccount] = useState("");

    useEffect(() =>{
        const data = localStorage.getItem('auth')
        if(data){
         const parseData = JSON.parse(data)
        setAccount(parseData.user.firstname)
        }
     },[]);
    return(
        <DataContext.Provider value={
            {
               account,
               setAccount
            }
        }>
           {children}
        </DataContext.Provider>
    )
}

export default DataProvider;