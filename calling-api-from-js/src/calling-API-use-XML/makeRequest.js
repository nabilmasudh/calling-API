import React from 'react'

const makeRequest = () => {

    const make = (method, url) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = () => {
          let data = xhr.response;
          console.log(JSON.parse(data));
        };

        xhr.onerror = () => {
          console.log("error is here");
        };

        xhr.send();
    }
    

    const getData = () =>{
        make("GET", "https://jsonplaceholder.typicode.com/posts");
    }
    getData()
    

    return (
        <div>
            <h1>API CALLING USING HTTPREQUEST</h1>
        </div>
    )
}

export default makeRequest
