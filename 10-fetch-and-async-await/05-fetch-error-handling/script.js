//######################################
// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//######################################
//another situation wherein success will not show but theres an error
// fetch('http://tropangcharat.org')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//######################################
//to do the workaround

// fetch('http://httpstat.us/404')
//   .then((response) => {
//     // console.log(response.ok);
//     if (!response.ok) {
//       throw new Error('Request Failed!');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//######################################
//checking for specific error code

fetch('http://httpstat.us/403')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    } else if (response.status != 200) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

//######################################
