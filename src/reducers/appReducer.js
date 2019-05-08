const jobReducer = (state = {}, action)=> {
    switch (action.type) {
        case 'GET_JOBS':{

            return state = {
              //  ...state,
                data: action.payload
                
            };
        }
        case 'POST_JOB':{
            //return;
            return state = {
                ...state
                // data: action.payload
                
            };
        }
        case 'UPDATE_JOB':{
           // return;
            return state = {
                ...state
                // data: action.payload
                
            };
        }
        case 'APPLY_JOB':{
             //return;
             return state = {
                 ...state
                 // data: action.payload
                 
             };
         }

        
         case 'APPLIED_JOB':{
            //return;
            //console.log(action.payload)
            return state = {
                ...state,
                applied: action.payload
                
            };
        }
        default:
            return state;

    }
}
export default jobReducer;