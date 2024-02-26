import { useEffect, useRef, useState } from "react";

export function useTypingEffect( textToType, interKeyStrokeDurationInMS){
   
    const [currentPosition,setCurrentPosition] = useState(0);
    const currentPosRef = useRef(0);
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentPosition((value)=> value + 1);
            currentPosRef.current += 1;
            if(currentPosRef.current > textToType.length ){
                clearInterval(intervalId);
            }
        }, interKeyStrokeDurationInMS);
        return () =>{
             clearInterval(intervalId);
             currentPosRef.current = 0;
             setCurrentPosition(0);
        }
    },[interKeyStrokeDurationInMS,textToType]);

    return textToType.substring(0,currentPosition);
}