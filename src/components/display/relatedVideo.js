import React from 'react'
import {Link} from 'react-router-dom'

const Rvideo = (props)=>{
    const rendervalue=({data})=>{
    
    if(data){
        return data.items.map((item)=>{
            return(
               <Link to={`/detail/${item.id.videoId}`}> <div className="container">    
                    <iframe width="200" height="150" src={`https://www.youtube.com/embed/${item.id.videoId}`} frameborder="0" alt='' allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
            </div></Link>
            )
        })
        }
    }
    return(
        <div>
            {rendervalue(props)}
        </div>
        
    )
}

export default Rvideo