import axios from "axios"
const apiBaseURL = process.env.API_BASE_URL

export const getLatestWod = async (store, request = axios) => {
    let status = "LOADING"
    const latestWod = await request.get(`${apiBaseURL}/latestWod`)
    if (latestWod.data) {
        console.log(latestWod.data)
        status = "SUCCESS"
        store.setState({ status, latestWod })
    }
}
