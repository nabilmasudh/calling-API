import React from 'react'

const fetchAPI = () => {
    
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=> {
    //     if(!res.ok){
    //         const message = `Error : ${res.status}`;
    //         throw new Error(message)
    //     }
    //     return res.json()
    // })
    // .then((res) => console.log(res))
    // .catch((err)=> console.log(err))





    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     title: " this is Title",
    //     body: "this is Body",
    //     userId: 1,
    //   }),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       const message = `Error : ${res.status}`;
    //       throw new Error(message);
    //     }
    //     return res.json();
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));





    // fetch("https://jsonplaceholder.typicode.com/posts/1", {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     id: 1,
    //     title: " this is Title, ID 01",
    //     body: "this is Body",
    //     userId: 1,
    //   }),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       const message = `Error : ${res.status}`;
    //       throw new Error(message);
    //     }
    //     return res.json();
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));






    // fetch("https://jsonplaceholder.typicode.com/posts/1", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     title: " this is Title, ID 01",
    //     body: "this is Body",
    //     userId: 1,
    //   }),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       const message = `Error : ${res.status}`;
    //       throw new Error(message);
    //     }
    //     return res.json();
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));




    // fetch("https://jsonplaceholder.typicode.com/posts/1", {
    //   method: "DELETE",
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       const message = `Error : ${res.status}`;
    //       throw new Error(message);
    //     }
    //     return res.json();
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));




    const makeFetchAPI = async (url, confige) => {
        const res = await fetch(url, confige);
        if(!res.ok){
            const message = `My Error ${res.status}`
            throw new Error(message)
        }
        const data = await res.json()
        return data
    }

    // const getData = () => {
    //     makeFetchAPI("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => console.log(res))
    //     .catch((error)=> console.log(error))
    // }

    // getData()


    // const sendData = () => {
    //   makeFetchAPI("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       title: "foo",
    //       body: "bar",
    //       userId: 1,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log(error));
    // };
    // sendData();


        // const patchData = () => {
        // makeFetchAPI("https://jsonplaceholder.typicode.com/posts/1", {
        //     method: "PATCH",
        //     body: JSON.stringify({
        //         title: "foo",
        //         body: "bar",
        //     }),
        //     headers: {
        //     "Content-type": "application/json; charset=UTF-8",
        //     },
        // })
        //     .then((res) => console.log(res))
        //     .catch((error) => console.log(error));
        // };
        // patchData();


        
        const deleteData = () => {
          makeFetchAPI("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
          })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        };
        deleteData();





    return (
        <div>
            <h1>CALLING API FROM JAVASCRIPT</h1>
        </div>
    )
}

export default fetchAPI;
