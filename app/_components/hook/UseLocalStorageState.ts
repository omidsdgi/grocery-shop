import {useEffect, useState} from "react";

export function useLocalStorageState<T>(initialState:T,key:string) {
    const [value,setValue]=useState( ()=>{
        if(typeof window === "undefined"){
            return initialState;
        }
        try{
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
        }catch(error){
            console.warn(`Error reading local storage state: ${key}`,error);
            return initialState;
        }
    })
    useEffect(()=>{
        try{
        window.localStorage.setItem(key,JSON.stringify(value));
        }catch (error){
            console.warn(`Error setting local storage key: ${key}`,error);
        }
    },[value,key])
    return [value,setValue] as const;
}