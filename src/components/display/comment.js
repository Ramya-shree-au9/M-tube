import React from 'react'
// import {Link} from 'react-router-dom'

const Detail = (props)=>{
    const rendervalue=({data})=>{
    
    if(data){
        if(data.items && data.items.length > 0){
        return data.items.map((item)=>{
            return(
                <div className="container">
                    
                    <div className='row'>
                    
                        <div className='col-md-1'>
                            <img style={{height:'70px',marginTop:'20px'}} src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=''/>
                        </div>
                        <div className='col-md-7'>
                        <hr/>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                            <h5>{item.snippet.topLevelComment.snippet.textDisplay}</h5>
                        </div>
                        
                    </div>
                       
                        {/* <p>{item.snippet.description}</p> */}
                    
            </div>
            )
        })
        }}
    }
    return(
        <div>
            {rendervalue(props)}
        </div>
        
    )
}

export default Detail