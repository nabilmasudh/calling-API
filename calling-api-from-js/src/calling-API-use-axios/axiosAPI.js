import React from 'react'
import axios from 'axios'

const axiosAPI = () => {
  console.clear();

  const makeAxiosRequest = async (config) => {
    return await axios(config);
  };

//   const deleteData = () => {
//     makeAxiosRequest({
//       url: "https://jsonplaceholder.typicode.com/posts/1",
//       method: "delete",
//     })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//   };

//   deleteData();

  const patchData = () => {
    makeAxiosRequest({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      method: "patch",
      body: JSON.stringify({
        title: "foo",
      }),
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  patchData();






  // const updateData = () => {
  //   makeAxiosRequest({
  //     url: "https://jsonplaceholder.typicode.com/posts/1",
  //     method: "put",
  //     body: JSON.stringify({
  //       id: 1,
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //   })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // updateData();

  // const createtData = () => {
  //   makeAxiosRequest({
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     method: "post",
  //     body: JSON.stringify({
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //   })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // createtData()

  // const getData = () => {
  //     makeAxiosRequest("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err))
  // }

  // getData()

  // axios
  //   .delete("https://jsonplaceholder.typicode.com/posts/1")
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

  // axios
  //   .patch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       title: "this is update title",

  //     }),
  //   })
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

  //   axios
  //     .put("https://jsonplaceholder.typicode.com/posts/1", {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         id: 1,
  //         title: "this is update title",
  //         body: "bar",
  //         userId: 1,
  //       }),
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));

  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //   })
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err))

  // axios
  // .get("https://jsonplaceholder.typicode.com/posts/1")
  // .then((res) => console.log(res.data))
  //  .catch((err) => console.log(err))

  return (
    <div>
      <h1>CALLING API FROM JAVASCRIPT</h1>
    </div>
  );
}

export default axiosAPI;
