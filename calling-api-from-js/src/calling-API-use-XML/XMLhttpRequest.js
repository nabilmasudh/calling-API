import React from 'react'
console.clear()

export const XMLhttprequest = () => {

    const makeRequest = (method, url, data) => {
        return new Promise((response, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onload = () => {
              let data = xhr.response;
              console.log(JSON.parse(data));
            };

            xhr.onerror = () => {
              console.log("error is here");
            };

            xhr.send(JSON.stringify(data));
        })
    }

    const getData = () =>{
        makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
        .then((res) => console.log(res))
    }
    getData()
    

    // const getData = () =>{
    //     makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    // }

    // // getData()

    // const sendData = () => {
    //   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    //         title: "this is title send data",
    //         body: "this is body send data",
    //         userId: 1,
    //   });
    // };

    // // sendData()


    // const updateData = () => {
    //     makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    //         id: 1,
    //         title: "this is title update data",
    //         body: "this is body updata data",
    //         userId: 1,
    // });
    // }

    // // updateData()

    // const updateSingleData = () => {
    //   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    //     title: "this is single data change",
    //   });
    // };

    // updateSingleData()

    return (
      <div>
        <h1>API Calling in js</h1>
      </div>
    );
}

export default XMLhttprequest;

