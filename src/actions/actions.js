import axios from 'axios';

// export const  getUser=() =>{

//     return {
//         type:"GET_USER",
//         payload: new Promise((resolve, reject) => {
//                 resolve(name);
//         })
//     };
// }
export const getJobsSucess=(data)=>{
    return {
        type: "GET_JOBS",
        payload: data
    }
}



export const getJobs=(company) =>{
    var url;
    
    if(company){
        url=`http://localhost:5001/jobs/${company}`
    }else{
        url='http://localhost:5001/jobs/';
    }

    return dispatch => {
        //console.log('in action')
        axios.get(url).then((res) => {
           // console.log(res.data);
            dispatch(getJobsSucess(res.data))
        }).catch((err) => {
            return err;
        })

    }
}



export const postJobSucess=(data)=>{
    return {
        type: "POST_JOB",
        payload: data
    }
}



export const postJob=(company) =>{
    var url;
   
    console.log(company)
  
    url='http://localhost:5001/jobs/';
    return dispatch => {
        //console.log('in action')
        axios.post(url,company).then((res) => {
          // console.log(res.data);
            dispatch(postJobSucess(res.data))
        }).catch((err) => {
            return err;
        })

    }
}






export const getUserSucess=(data)=>{
    return {
        type: "GET_USER",
        payload: data
    }
}



export const getUser=(user) =>{
    var url;
   
  //  console.log(user)
  
    url='http://localhost:5001/login';
    return dispatch => {
        //console.log('in action')
        axios.post(url,user).then((res) => {
           console.log(res.data);
            dispatch(getUserSucess(res.data))
        }).catch((err) => {
            return err;
        })

    }
}



// export const getDataSuccess =(data) => {
//     return {
//         type: "GET_DATA_FULFILLED",
//         payload: data
//     }
// }


// export const getJobSkills = () => {

   
// }
