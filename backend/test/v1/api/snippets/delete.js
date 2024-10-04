fetch("http://localhost:5000/api/workout/21", {
  "method": "DELETE",
  "headers": {
    "User-Agent": "vscode-restclient"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});