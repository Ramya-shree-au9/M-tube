import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {GoogleLogin,GoogleLogout} from 'react-google-login'
import Config from '../config.json'

import  {AUTH_ACTION,PROFILE_ACTION} from '../actions'
import {connect} from 'react-redux'
import FacebookLogin from 'react-facebook-login'

class Login extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         uName:localStorage.getItem("userName")
    //     }
    // }
    componentDidMount(){
        const Nuser =JSON.parse(localStorage.getItem("userName"))
        if(Nuser){
            this.props.dispatch({
                type:AUTH_ACTION.LOGIN,
                payload:Nuser.token
            })
            // this.props.dispatch({
            //     type:PROFILE_ACTION.SET,
            //     payload:Nuser.user
            // })
        }
        // this.props.action.dispatch(AUTH_ACTION())
    }

    responseGoogle=(response)=>{
        if(!response && !response.accessToken){
            alert('Error While Login')
        }else if(response && response.accessToken){
        const details={
            user:response.profileObj,
            token:response.accessToken
        }
        localStorage.setItem('userName',JSON.stringify(details))
        console.log('res',response)
        this.props.dispatch({
            type:AUTH_ACTION.LOGIN,
            payload:details.token
        })
        // this.props.dispatch({
        //     type:PROFILE_ACTION.SET,
        //     payload:details.user
        // })

        var url="https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4"
       console.log("details.token",details.token)
       fetch(url,{
           method:'GET',
           headers:{
               Authorization:`Bearer ${details.token}`,
               Accept: "application/json"
           }
       })
       .then((res) => res.json())
       .then((data) => {
           console.log(data)
       })
        }
    // var playlist = {status: {privacyStatus: "public"}, snippet: {description: "description of playlist", title: "title of playlist"}} 
    // var url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,status&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4`
    // fetch(url,{
    //             method:'POST',
    //             headers:{
    //                 Authorization:`Bearer ${details.token}`,
    //                 Accept: "application/json"
    //             },
    //             body:JSON.stringify(playlist)
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //         })
    }

    logout=()=>{
        localStorage.removeItem('userName')
        this.props.dispatch({
            type:AUTH_ACTION.LOGOUT,
            // payload:null
        })
        this.props.dispatch({
            type:PROFILE_ACTION.RESET,
            
        })
    }

    componentClicked=()=>{
        console.log('cliked')
    }
   
    responseFacebook(response){
        console.log('resFAce',response)
        if(!response && !response.accessToken){
            alert('Error While Login')
        }else if(response && response.accessToken){
        const details={
            user:response.profileObj,
            token:response.accessToken
        }
        localStorage.setItem('userName',JSON.stringify(details))
       
        this.props.dispatch({
            type:AUTH_ACTION.LOGIN,
            payload:details.token
        })}
    }
    render(){
        // console.log('basd',this.state.uName)
        return(
            <React.Fragment>
          
             {/* {!this.props.auth.isauth && */}
                 <GoogleLogin
                clientId={Config.clintId}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {/* } */}

            {this.props.auth.isauth &&
            <React.Fragment>
                <Link style={{color:'white'}} to={`/playlist/${this.props.auth.token}`}>My Playlist</Link>
              <p style={{color:'white'}}>Name:{this.props.profile.name} </p>
                <GoogleLogout
                clientId={Config.clintId}
                buttonText="Logout"
                onLogoutSuccess={this.logout}
                >
            </GoogleLogout>
            </React.Fragment>}
             {  !this.props.auth.isauth &&
                 <FacebookLogin
                appId="455709445440352"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            }
            
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
        profile:state.profile
    }
}

export default connect(mapStateToProps)(Login)