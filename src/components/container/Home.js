import React,{Component} from 'react'
import {Seavideo} from '../actions'
import {connect} from 'react-redux'
import HomeDisplay from '../display/Homedisplay'

class Home extends Component{
    constructor(){
        super()
        this.state={
            result:''
        }
    }
    componentDidMount(){
        this.props.dispatch(Seavideo())
    }

    changeHandler=(e)=>{
        // console.log(e.target.value)
        this.setState({result:e.target.value})
    }

    clickHandler=()=>{
         console.log(this.state.result)
        this.props.dispatch((Seavideo(this.state.result)))
    }

    render(){
        return(
            <React.Fragment>
                <div className='row'>
                    <div className='col-md-11'>
                        <div className='form-group'>
                            <input className='form-control' onChange={this.changeHandler} placeholder='search'></input>
                        </div>
                    </div>
                    <div className='col-md-1'>
                        <button onClick={this.clickHandler} className='btn glyphicon glyphicon-search'></button>
                    </div>
                </div>
                
                <div>
                    <HomeDisplay data={this.props.mydata.serVideo}/>
                </div>
            </React.Fragment>
        )
    }  
}

function mapsStateToProps(state){
    console.log(state)
    return{
        mydata:state.trend
    }
}

export default connect(mapsStateToProps)(Home)