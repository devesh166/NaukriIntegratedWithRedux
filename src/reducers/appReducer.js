const jobReducer = (state = {}, action)=> {
    switch (action.type) {
        case 'GET_JOBS':{

            return state = {
              //  ...state,
                data: action.payload.message,
                pages: action.payload.page

                
            };
        }
        case 'GET_ALL_USER':{
            return state = {
                ...state,
                users: action.payload
                
            };
        }
        
        
        case 'POST_JOB':{
            //return;
            return state = {
                ...state
                // data: action.payload
                
            };
        }
         
        case 'CHANGE_JOB_STATUS':{
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
        case 'APPLIED_USERS':{
            //return;
            //console.log(action.payload)
            return state = {
                ...state,
                appliedUsers: action.payload
                
            };
        }
        
        case 'APPLIED_USERS_List':{
            //return;
            //console.log(action.payload)
            return state = {
                ...state,
                userList: action.payload
                
            };
        }
        default:
            return state;

    }
}
export default jobReducer;