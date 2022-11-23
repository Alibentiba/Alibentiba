import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';



const Widgets = () => {
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


  return (
    <div className='Widgets'>
        <h4 className='Widgets-title'>Add to your feed <InfoIcon/></h4>
  
      <WidgetsProfils photo="https://i.cbc.ca/1.6652687.1668549992!/fileImage/httpImage/omar-dabaghi-pacheco.jpg" Name='Amin hadai' post="CEO founder/HR Business Partner +71K followers" />
      <WidgetsProfils photo='https://www.programme-tv.net/imgre/fit/~2~providerPerson~3204dcd7c295bf16.jpeg/300x300/quality/80/amir-haddad.jpeg' Name="Akram Aide" post='Responsable d Administration RH chez Novatec Group'/> 
      <WidgetsProfils photo='https://www.aucegypt.edu/sites/default/files/2022-11/Hossam%20Sharara.jpg' Name='Houssam Cherif' post='web dev/anguler/react'/>
      






    </div>
  )
}

export default Widgets