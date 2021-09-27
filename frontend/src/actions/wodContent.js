import axios from "axios"
const apiBaseURL = process.env.API_BASE_URL

export const getLatestWod = async (store, request = axios) => {
    let status = "LOADING"
    const latestWod = await request.get(`${apiBaseURL}/latestWod`)
    if (latestWod.data) {
        status = "SUCCESS"
        store.setState({ status, latestWod })
    }
}

export const addNewWod = async (store, request = axios, wod) => {
    console.log("BEFORE")
    console.log(wod)
    console.log("AFTER")
    const insertedWod = await axios
        .post(`${apiBaseURL}/wods`, wod)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}
