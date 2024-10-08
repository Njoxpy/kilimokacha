fetch("http://localhost:5000/api/v1/expert-advice/", {
  "method": "POST",
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

