import axios from 'axios';
import { reject } from 'q';

// export const  getUser=() =>{

//     return {
//         type:"GET_USER",
//         payload: new Promise((resolve, reject) => {
//                 resolve(name);
//         })
//     };
// }
export const getJobsSucess = (data) => {
    return {
        type: "GET_JOBS",
        payload: data
    }
}



export const getJobs = (company) => {
    var url;

    if (company) {
        url = `http://localhost:5001/jobs/${company}`

        return dispatch => {
            console.log('in action')
            axios.get(url).then((res) => {
                console.log(res.data);
                dispatch(getJobsSucess(res.data))
               
            }).catch((err) => {
                return err;
            })
    
        }

    } else {
        url = 'http://localhost:5001/jobs/';

        return dispatch => {
           // console.log('in action')
            axios.get(url).then((res) => {
                //console.log(res.data);

                let currentUser=JSON.parse(localStorage.getItem('currentUser'));
                // 
                // dispatch(getAppliedJobs({ user_id :currentUser._id}))
                let pr = new Promise ( (resolve,reject)=>{
                    if(currentUser){
                        dispatch(getAppliedJobs({ user_id :currentUser._id}))
                    }
                   
                    resolve();
                })
                pr.then(()=>{
                    dispatch(getJobsSucess(res.data))
                })
               
            }).catch((err) => {
                return err;
            })
    
        }

    }

    
}



export const postJobSucess = (data) => {
    return {
        type: "POST_JOB",
        payload: data
    }
}



export const postJob = (company) => {
    var url;

    //console.log(company)

    url = 'http://localhost:5001/jobs/';
    return dispatch => {
        console.log(company)
        axios.post(url, company).then((res) => {
            console.log(res.data);
            if (res.data.errors) {
                window.alert(JSON.stringify(res.data.message))
            } else {
                let pr = new Promise((resolve, reject) => {
                    dispatch(postJobSucess(res.data))
                    resolve();
                })
                pr.then(() => {
                    dispatch(getJobs(company.name))
                })

            }

        }).catch((err) => {
            return err;
        })

    }
}


//----------get all users-------
export const getAllUsersSucess = (data) => {
    return {
        type: "GET_ALL_USER",
        payload: data
    }
}



export const getAllUsers = () => {
    var url;

     // console.log("in fn")

    url = 'http://localhost:5001/users';
    return dispatch => {
        //console.log('in action')
        axios.get(url).then((res) => {
           //  console.log(res.data);

            if (res.data.errors) {
                window.alert(JSON.stringify(res.data.message))
            } else{
                dispatch(getAllUsersSucess(res.data))
            }
            
        }).catch((err) => {
            alert(err);
        })

    }
}



export const getUserSucess = (data) => {
    return {
        type: "GET_USER",
        payload: data
    }
}



export const getUser = (user) => {
    var url;

    //  console.log(user)

    url = 'http://localhost:5001/login';
    return dispatch => {
        //console.log('in action')
        axios.post(url, user).then((res) => {
             console.log(res.data);
            if (res.data.errors) {
                window.alert(JSON.stringify(res.data.message))
            } else{
                dispatch(getUserSucess(res.data))
            }
            
        }).catch((err) => {
            alert(err);
        })

    }
}

//--------update Job status-----
export const  changeJobStatusSucess = (data) => {
    return {
        type: "CHANGE_JOB_STATUS",
        payload: data
    }
}



export const changeJobStatus = (user) => {
    var url; 
    url = 'http://localhost:5001/apply';
    return dispatch => {
        //console.log('in action')
        axios.put(url, user).then((res) => {
             console.log(res.data);

            if (res.data.errors) {
                window.alert(JSON.stringify(res.data.message))
            } else{
                dispatch(changeJobStatusSucess(res.data))
            }
            
        }).catch((err) => {
            alert(err);
        })

    }
}





// --------applied jobs --------
export const getAppliedJobsSucess = (data) => {
    return {
        type: "APPLIED_JOB",
        payload: data
    }
}



export const getAppliedJobs = (user) => {
    var url;


    url = 'http://localhost:5001/applied';
    return dispatch => {
       // console.log(user)
        axios.post(url, user)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.stringify(res.data.message))
                } else {
                   // console.log(res.data)
                    // let pr = new Promise((resolve, reject) => {
                    //     
                     dispatch(getAppliedJobsSucess(res.data))
                    //     // resolve();
                    // })
                    // pr.then(() => {

                    //     dispatch(getJobs())
                    // })

                    
                }
 
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
}
//---------get list of applied users----
// export const getUserListSucess = (data) => {
//     return {
//         type: "APPLIED_USERS_List",
//         payload: data
//     }
// }



// export const getUserList = (appliedUsers) => {
     
//     var userList1=[];

//      //console.log('feched data', appliedUsers)
//     return dispatch => {

//         var size =  appliedUsers.length
//          appliedUsers.map((ele, ind) => {
//             axios.get(`http://localhost:5001/users/${ele.user_id}`)
//             .then((res) => {
//                 if (res.data.errors) {
//                     window.alert(JSON.stringify(res.data.message))
//                 } else {
//                     userList1.push(res.data)  
                     
//                 }
//             })
//             size--;
//             if (size === 0) {
//                // console.log('dispach data',userList1)
//                 return dispatch(getUserListSucess(userList1))
//             }
//             //console.log(size)
//         })


//     }
// }
//---------applied user-----
 
export const getAppliedUsersSucess = (data) => {
    return {
        type: "APPLIED_USERS",
        payload: data
    }
}



export const getAppliedUsers = (user) => {
    var url;


    url = 'http://localhost:5001/appliedUsers';
    return dispatch => {
      //  console.log(user)
        axios.post(url, user)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.stringify(res.data.message))
                } else {
                   // console.log(res.data)
                    // 
                    // 
                    // dispatch(getAllUsers())
                    // dispatch(getAppliedUsersSucess(res.data))
                   // dispatch(getUserList(res.data))
                    let pr = new Promise((resolve, reject) => {
                        
                        dispatch(getAllUsers())
                        resolve();
                    })
                    pr.then(() => {
                       dispatch(getAppliedUsersSucess(res.data))
                       
                    })

                    
                }

                 

            })
            .catch((err) => {
                console.log(err.response)
            })

    }
}







export const applyJobsSucess = (data) => {
    return {
        type: "APPLY_JOB",
        payload: data
    }
}







export const applyJobs = (user) => {
    var url;


    url = 'http://localhost:5001/apply';
    return dispatch => {
        console.log(user)
        axios.post(url, user)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.stringify(res.data.message))
                } else {
                    let pr = new Promise((resolve, reject) => {
                        console.log(res.data)
                        dispatch(applyJobsSucess(res.data))
                        resolve();
                    })
                    pr.then(() => {

                        dispatch(getJobs())

                    })

                    
                }

                console.log(res);

            })
            .catch((err) => {
                console.log(err.response)
            })

    }
}

export const postUserSucess = (data) => {
    return {
        type: "POST_USER",
        payload: data
    }
}



export const postUser = (user) => {
    var url;


    url = 'http://localhost:5001/signUp';
    return dispatch => {
       
        axios.post(url, user)
            .then((res) => {
                console.log(res)
                if (res.data.errors) {
                    window.alert(JSON.stringify(res.data.message))
                } else {
                    dispatch(postUserSucess(res.data))
                }

                console.log(res);

            })
            .catch((err) => {
                console.log(err.response)
            })

    }
}



export const updateJobSucess = (data) => {
    return {
        type: "UPDATE_JOB",
        payload: data
    }
}



export const updateJobs = (job) => {
    var url;
    url = 'http://localhost:5001/jobs';
    return dispatch => {
        console.log(job)
        axios.put(url, job).then((res) => {
             console.log(res);
            if (res.data.errors) {
                window.alert(JSON.stringify(res.data.message))
            } else {
                let pr = new Promise((resolve, reject) => {
                    dispatch(updateJobSucess(res.data))
                    resolve();
                })
                pr.then(() => {
                    dispatch(getJobs(job.name))
                })
            }

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
