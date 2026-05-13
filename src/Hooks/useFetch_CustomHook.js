import React from 'react'
export const useFetch_CustomHook = (url) => {
  
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [err , setErr] = useState(null);

  async function fetchData(){
    setLoading(true);
    try{
      const res = await fetch(url);
      const result =  await res.json();
      setData(result)
    }catch(err){
      setErr(err.message);
      console.log('Error occured',err);
    }finally{
      setLoading(false)
    }
  }

  return {data,loading,err,fetchData}

}
 

//App.js
import React from "react";
import useFetch_CustomHook from "./useFetch_CustomHook";

export default function App() {
  const { data, loading, err, fetchData } = useFetch_CustomHook(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <button onClick={() => fetchData()}>
        Get Users List
      </button>
      <hr />

      {/* Loading State */}
      {loading && <p>Loading users...</p>}

      {/* Error State */}
      {err && <p style={{ color: "red" }}>{err}</p>}

      {/* Data */}
      {!loading &&
        !err &&
        data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </div>
  );
}
