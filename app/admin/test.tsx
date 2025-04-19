"use client"
import * as React from 'react'

const Test = () => {

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/project', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
        }
        fetchData();
    }
    , [])



    return (
    <div>test</div>
  )
}

export default Test