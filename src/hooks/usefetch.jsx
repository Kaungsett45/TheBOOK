import React from 'react'
import { useState, useEffect } from 'react'
function useFetch  (url) {

    let [data,setData] = useState(null);
    let [loading,setLoading] = useState(true);
    let [error,setError] = useState(null);  

    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);
        fetch



    return (
    <div>
      
    </div>
  )
(url, {
    signal
}).then(res =>{
    if(!res.ok){
        throw Error('something went wrong');
    }
    return res.json();
})
.then (data=>{
    setData(data);
    setLoading(false);
    setError(null);
})
.catch(e =>{
    setError(e.message);

})


return()=>{
    abortController.abort();
    
}
},[url]);
    return {data, loading, error};
}

export default useFetch;
