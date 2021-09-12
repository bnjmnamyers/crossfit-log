import axios from "axios"

export const getPRs = async (store, request = axios) => {
    let status = "LOADING"
    store.setState({ status })
}
