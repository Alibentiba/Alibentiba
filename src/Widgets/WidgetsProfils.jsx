import React from 'react'
// import './Widgets.css'



const WidgetsProfils=({photo,Name,post})=>{

    return(
        
        <div className='widgetsProfils' >
            <div className='widgetsProfils-info-img-div'>
                     <img className='widgetsProfils-info-img' src={photo} />

            </div>

        <div className='widgetsProfils-info'>
            <h4>{Name}</h4>
            <p>{post}</p>
            <button className='widgetsProfils-info-button'>+Follow</button>
        
        </div>
        
        
        
        
        </div>)}
export default WidgetsProfils    