const GET_DOCTORS = 'GET_DOCTORS';

let initialState = {
    employees: []
}

const doctorBaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOCTORS:
            return {
                ...state,
                employees: action.getEmployees
            };

        default:
            return state;
    }
}

export const requestGetEmployees = (getEmployees) => ({ type: GET_DOCTORS, getEmployees })

export default doctorBaseReducer;