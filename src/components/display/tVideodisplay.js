import React from 'react'
import './trending.css'

const video=(props)=>{
    const rendervalue=({data})=>{
        if(data){
            if(data.item){
            return data.items.map((item)=>{
                return(
                    <div className="tileContainer">
                    <div className="tileComponent1">
                        <iframe width="300" height="150" src={`https://www.youtube.com/embed/${item.id}`} 
                        frameborder="0" alt='' allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="tileComponent2">
                        {item.snippet.title}
                        <p>{item.snippet.channelTitle}</p>
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