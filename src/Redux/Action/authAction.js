import axios from 'axios'
import { User_Loading_Attempt, User_Loading_False, User_Loading_True, User_Login, User_Logout } from '../Types'


// Login Function
export let login =(option)=> async (dispatch)=>{

    try {
        dispatch({type:User_Loading_Attempt})
        let mylog=await axios.post('http://localhost:5000/user/login', option)
        console.log(mylog)
        dispatch({type:User_Login, payload: mylog.data.data})
        dispatch({type:User_Loading_True})

    } catch (error) {
        dispatch({type:User_Loading_False})
        
    }
}

// Signup Function
export let signup =(option)=> async (dispatch)=>{

    try {
        dispatch({type:User_Loading_Attempt})
        let mylog=await axios.post('http://localhost:5000/user/signup', option)
        console.log(mylog)
        dispatch({type:User_Login, payload: mylog.data})
        dispatch({type:User_Loading_True})


    } catch (error) {
      console.log(error)
        dispatch({type:User_Loading_False,payload:error.response.data})
        
    }
}

// Logout Function

export let logout =()=> async (dispatch)=>{

 dispatch({type: User_Loading_Attempt})
 dispatch({type: User_Logout})
 dispatch({type: User_Loading_True})

}