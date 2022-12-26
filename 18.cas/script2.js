//fetch
//fetch() asinhrona funkcija za preuzimanje podataka
//api - aplication programming interface

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(post.id + " " + post.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//pravljenje async func - za kompleksnije projekte

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};
getUsers().then((users)=>{console.log(users);})