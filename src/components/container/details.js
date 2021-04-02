import React,{Component} from 'react'
import {Detailvideo,Commentvideo,Relatedvideo} from '../actions'
import {connect} from 'react-redux'
import Comments from '../display/comment'
import DetailVideo from '../display/detailVedio'
import RelatedVideo from '../display/relatedVideo'


class Home extends Component{
    
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.dispatch(Detailvideo(this.props.match.params.id))
        this.props.dispatch(Commentvideo(this.props.match.params.id))
        this.props.dispatch(Relatedvideo(this.props.match.params.id))
    }

   

    render(){
        // console.log(this.props)
        return(
            <React.Fragment>
                <div className='row'>
                    <div className='col-md-8'>
                    <center><h2>DETAILS</h2></center>
                        <DetailVideo data={this.props.mydata.detVideo}/>
                        <h2 style={{paddingLeft:'15px'}}>Comments</h2>
                        <Comments data={this.props.mydata.comVideo}/>
                    </div>
                    <div className='col-md-4'>
                        <h3 style={{paddingLeft:'15px'}}>Related Videos</h3>
                        <RelatedVideo data={this.props.mydata.relVideo}/>
                    </div>
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