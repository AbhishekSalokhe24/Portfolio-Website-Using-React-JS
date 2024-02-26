const reducer = (state, action)=>{
    if(action.type === "HOME_UPDATE"){
        return {
            ...state,
            name:action.payload.name,
            image: action.payload.image,
            top_text:action.payload.top_text,
            bottom_text:action.payload.bottom_text,
        }
    }

    if(action.type === "ABOUT_UPDATE"){
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            top_text:action.payload.top_text,
            bottom_text:action.payload.bottom_text,
        }
    }
    if(action.type === "GET_SERVICES"){
        return {
            ...state,
            services: action.payload,
            
        }
    }
    return state; 
}

export default reducer;