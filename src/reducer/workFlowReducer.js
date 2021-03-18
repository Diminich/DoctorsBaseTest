const GET_WORK_FLOW = 'GET_WORK_FLOW';

const initialState = {
    worklogs: []
}

const workFlowReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORK_FLOW:
            return {
                ...state,
                worklogs: action.getWorklog
            }

        default:
            return state;
    }
}

export const requestGetWorklog = (getWorklog) => ({ type: GET_WORK_FLOW, getWorklog })

export default workFlowReducer;