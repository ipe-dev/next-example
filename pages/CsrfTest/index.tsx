type getEchoResponse = {
    message: string
}
const getFromEcho = async () => {
    const response = await fetch("http://localhost:8090/getHello")
    return response

}
const postToEcho = async () => {
    const name = "taro"
    const response = await fetch("http://localhost:8080/hello", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name })
    })
    return response
}
const CorsTest = () => {
    const postResponse = postToEcho()
    console.log(postResponse)

    return (
        <>
            <h1>CSRF Test Page</h1>
        </>
    )
}

export default CorsTest