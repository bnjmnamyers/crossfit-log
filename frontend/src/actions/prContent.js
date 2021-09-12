import axios from "axios"
const apiBaseURL = process.env.API_BASE_URL

export const getPRs = async (store, request = axios) => {
    let status = "LOADING"
    store.setState({ status })

    try {
        const prs = await request.get(`${apiBaseURL}/prs`)
        if (prs.data.length) {
            status = "SUCCESS"
            store.setState({ status, prs })
        }
    } catch (error) {
        console.log(error)
    }
}
