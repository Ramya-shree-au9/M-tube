import React from 'react'
import {Link} from 'react-router-dom'

const video=(props)=>{
    console.log(props)
    const rendervalue=({data})=>{
        if(data){
            if(data.item){
            return data.items.map((item)=>{
                return(
                    <div className="row">
                        <hr/>
                        <div className="col-md-4">
                     
                            <img  src={item.snippet.thumbnails.medium.url} alt=''/>
                           
                        </div>
                        <div className="col-md-8">
                      
                            <h3><Link style={{textDecoration:'none'}} to={`/detail/${item.id.videoId}`}>{item.snippet.title}</Link></h3>
                            <p>{item.snippet.description}</p>
                            <h5><b>Channel Name:</b> {item.snippet.channelTitle}</h5>
                        </div>
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

export default video