fetch("http://localhost:5000/api/v1/announcement/12", {
  "method": "PUT",
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
