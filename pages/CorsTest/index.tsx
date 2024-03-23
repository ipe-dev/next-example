const getFromEcho = async () => {
    const response = await fetch("http://localhost:8090/getHello")
    return response.json
}
const postToEcho = async () => {
    const name = "taro"
    const response = await fetch("http://localhost:8090/postHello", {
        method: "POST",
        body: JSON.stringify({name: name})
    })
    return response
}
const CorsTest = () => {
    // const response = getFromEcho()
    const postResponse = postToEcho()
    console.log(postResponse)
    // console.log(response);
    
    return (
        <>
            <h1>CORS Test Page</h1>
        </>
    )
}

export default CorsTest