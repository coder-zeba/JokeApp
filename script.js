async function getJoke(jcat){
    const url = `https://sv443.net/jokeapi/v2/joke/${jcat}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        document.getElementById("joketype").innerText=data.type
        document.getElementById("cat").innerText=data.category
        // console.log(data.type)
        if (data.type == 'single') {
            document.getElementById('joke').innerText=data.joke
        }else{
            document.getElementById('setup').innerText=data.setup
            document.getElementById('delivery').innerText=data.delivery

        }
    } catch (error) {
        alert(error)
    }
}