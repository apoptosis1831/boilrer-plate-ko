import { Axios } from 'axios'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../../../_actions/user_action'
import Auth from '../../../hoc/auth'


function LoginPage(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("") // 안에서 데이터 변경할때 state필요  , 처음 값은 빈칸으로 "" 지정
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  } // setEmail 이용해서 state 바궈준다
  const onPasswordHandler = (event)=>{
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault();


    let body = {
      email:Email,
      password:Password
    }

    dispatch(loginUser(body))
    .then(response=>{
      if(response.payload.loginSuccess){
        //props.history.push('/')
        navigate('/') // landingPage로 페이지 이동
      } else{
        alert('Error')
      }
    })

    
  }

  return (
    <div style = {{display:'flex', justifyContent : 'center', alignItems: 'center', width:'100%', height:'100vh'}}>
      <form style ={{display: 'flex', flexDirection: 'column'}}
      onSubmit = {onSubmitHandler}
      >
        <label>Email</label>
        <input type = "email" value={Email} onChange={onEmailHandler}/>
        <label>Password</label>
        <input type = "password" value={Password} onChange={onPasswordHandler}/>

        <br/>
        <button type = "submit">
          login
        </button>
      </form>
      </div>
  )
}

// export default Auth(LoginPage,false)
export default LoginPage;