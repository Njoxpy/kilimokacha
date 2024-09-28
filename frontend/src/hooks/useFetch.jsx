const useFetch = () => {
    const URL = "http://localhost:3000/blogs";

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                console.error("connection error");
            }
            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => {
            console.error(error)
        })
    return (
        <>
            <div>

            </div>
        </>
    )
}

export default useFetch;