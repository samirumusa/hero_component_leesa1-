import { useEffect } from "react"
import "./Hero.css"
export interface iHero{
    image:string,
    iam:string,
    name:string,
    skills:string[]
    cskill:number
}
export function Hero({image,iam,name,skills,cskill}:iHero){

/* const string_factory = new Promise(skill,(resolve, rejects)=>{

    return resolve(setTimeout(()=>{return string},1000) 
})

const skill_counter = (skills:string[]):any=>{

    for(let i=0; i<skills.length; i++){
        
    }
     
} */
useEffect(()=>{
    if(cskill >=0 && cskill<skills.length){

        setTimeout(()=>{return cskill++}, 3000)
    }else{
        cskill=0
    }
},[cskill])

    return(
        <>
        <div className="hero_container">
            <div className="left_hero_container">
                <h3>iam</h3>
                <h1>name</h1>
                <h2>{skills[cskill]}</h2>
            </div>
            <div className="right_hero_container">
               <div className="image_container">
                 <img className="hero" src={image} alt="hero_image" height={50}/>
               </div>
            </div>
        </div>
        </>
    )
}