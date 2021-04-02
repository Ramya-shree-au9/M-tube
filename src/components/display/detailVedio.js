import React from 'react'
// import {Link} from 'react-router-dom'

const Detail = (props)=>{
    const rendervalue=({data})=>{
    
    if(data){
        return data.items.map((item)=>{
            return(
                <div className="container">
                    
                        <iframe width="650" height="450" src={`https://www.youtube.com/embed/${item.id}`} frameborder="0" alt='' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                        <h3 style={{width:'650px'}}>{item.snippet.title}</h3>
                        {/* <p>{item.snippet.description}</p> */}
                    
            </div>
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

export default Detail