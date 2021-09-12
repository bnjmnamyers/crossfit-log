import globalHook from "use-global-hook"

import * as actions from "../actions"

const initialState = {
    status: "INITIAL",
    prs: [],
    wod: {},
    pastWods: [],
}

const useGlobal = globalHook(initialState, actions)

export default useGlobal
