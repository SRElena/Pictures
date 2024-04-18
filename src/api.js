import axios from  'axios'

const searchImage = async(term) => {
    const url = 'http://api.unsplash.com/search/photos/?client_id=3rfCp2rTCwUZ7kK7gW6Y2SDINQoUUUqbervFp1rqQYc'
    const response = await axios.get(url,{
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}

export default searchImage