import React,{Component} from 'react'
import {Trevideos} from '../actions'
import {connect} from 'react-redux'
import TrendVideo from '../display/tVideodisplay'

class Treanding extends Component{
    componentDidMount(){
        this.props.dispatch(Trevideos())
    }

    render(){
        console.log(this.props.myvideo)
        return(
            <>
            <h2>Trending Video</h2>
            <TrendVideo data={this.props.myvideo.trend}/>
            {/* wt given in reducer */}
            </>
        )
    }
}

function mapsStateToProps(state){
    console.log(state)
    return{
        myvideo:state.trend  //wt we give in mainreducer
    }
}

export default connect(mapsStateToProps)(Treanding)