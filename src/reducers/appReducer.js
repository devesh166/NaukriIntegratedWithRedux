const jobReducer = (state = {}, action)=> {
    switch (action.type) {
        case 'GET_JOBS':{

            return state = {
                ...state,
                data: action.payload
                
            };
        }
        case 'POST_JOB':{

            return state = {
                ...state
                // data: action.payload
                
            };
        }
        default:
            return state;

    }
}
export default jobReducer;