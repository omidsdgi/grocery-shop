"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(initialState:T, key:string):[T, Dispatch<SetStateAction<T>>] {
    const [value,setValue]=useState<T>(()=>{
        if(typeof window === "undefined"){
            return initialState;
        }
        try{
        const storedValue = localStorage.getItem(key);
            if (storedValue !== null) {
                return JSON.parse(storedValue) as T;
            }
            return initialState;
        }catch(error){
            console.warn(`Error reading local storage state: ${key}`,error);
            return initialState;
        }
    })
    useEffect(()=>{
        if (typeof window === "undefined") return;

        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(error) {
            console.warn(`Error setting local storage key: ${key}`,error);
        }
    },[value,key])
    return [value,setValue];
}