const QuoteAPI = async() =>{

    let valuestring = ""
    const url = `https://api.api-ninjas.com/v1/quotes?category=inspirational`;
    await fetch(url, {
        method: 'GET', // Change the method if needed (e.g., POST)
        headers: {
            'X-Api-Key': 'put a key here',
        },
    })
        .then((response)=> response.json() )
        .then((data) => {
            valuestring = data[0].quote
        })
    return valuestring

}
export default QuoteAPI