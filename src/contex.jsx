// create a contex
// Provider 
// Consumer - useContext

import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";


const AppContext = createContext(); 



const initialState = {
    name:"",
    image:"",
    top_text:"",
    bottom_text:"",
}



const AppProvider = ({children}) => {

    const updateHomePage = ()=>{
        return dispatch(
            {
                type:"HOME_UPDATE",
                payload:{
                    name:"Abhishek Salokhe",
                    image:"./Images/About Image.png",
                    top_text:"This is me",
                    bottom_text:"I am a Software Engineer at Get My Solutions, Pune",
                }
            }
    
        )
    };
    
    const updateAboutPage = ()=>{
        return dispatch(
            {
                type:"ABOUT_UPDATE",
                payload:{
                    name:"FullStack Developer",
                    image:"./Images/Code typing-bro.png",
                    top_text:"I am",
                    bottom_text:"I possess practical experience with cutting-edge technologies.",
                }
            }
        );
    };
    const [state,dispatch] = useReducer(reducer,initialState);

    return <AppContext.Provider value={{ ...state,updateAboutPage,updateHomePage }}>
         {children}
   </AppContext.Provider>
};


//custom hooks
 
const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext,AppProvider,useGlobalContext};


