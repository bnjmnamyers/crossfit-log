import axios from "axios"
const apiBaseURL = process.env.API_BASE_URL

export const getPRs = async (store, request = axios) => {
    let status = "LOADING"
    store.setState({ status })

    try {
        const prs = await request.get(`http://localhost:2418/prs`)
        status = "SUCCESS"
        store.setState({ status, prs })
        console.log("/----------------PRs----------------/")
        console.log(prs)
        console.log("/----------------PRs----------------/")
    } catch (error) {
        console.log(error)
    }
}
