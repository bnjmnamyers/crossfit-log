import globalHook from "use-global-hook"

import * as actions from "../actions"

const initialState = {
    status: "INITIAL",
    formData: {},
    latestWod: {},
    prs: [],
    pastWods: [],
}

const useGlobal = globalHook(initialState, actions)

export default useGlobal
