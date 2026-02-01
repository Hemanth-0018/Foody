import {useEffect, useState} from 'react';

const useOnline=()=>{
    const [signal,setSignal]=useState(true);
    useEffect(()=>{
        window.addEventListener('offline',(e)=>{
            setSignal(false);
        })
        window.addEventListener('online',(e)=>{
            setSignal(true);
        })
    },[])
    
    return signal;
}
export default useOnline;