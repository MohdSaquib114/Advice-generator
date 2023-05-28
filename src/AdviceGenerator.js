import react from 'react'
import reactDom from 'react-dom'
import { useState  } from 'react'
import { useEffect } from 'react'
import dice from './images/icon-dice.svg'
import desktopLine from './images/pattern-divider-desktop.svg'
import mobileLine from './images/pattern-divider-mobile.svg'
import getData  from './getData'
import './style.css'


const viewPortWidth = window.innerWidth
// console.log(viewPortWidth)
const dividerLine =viewPortWidth> 450? desktopLine : mobileLine;
// console.log(dividerLine)


const  AdviceGenerator= ()=>{
    const [adviceObj, setadviceObj] = useState(null)
   
   const handleChange = ()=>{
 getData().then(data=>setadviceObj(data.slip))
   }


    useEffect(()=>{
getData().then(data=>setadviceObj(data.slip))
}, [])

    return(
        <main className='container'>
           <p className='id'>ADVICE  #{adviceObj?.id || '..isLoading'}</p>
           <h1 className='advice'>"{adviceObj?.advice || '..isLoadind'}"</h1>
            <img  src={dividerLine} />
         
           <button className="diceButton"onClick={handleChange} aria-label='advice-generator-button'><img src={dice} /></button>
        </main>
    )
}


   


export default AdviceGenerator

// fetch('https://api.adviceslip.com/advice')