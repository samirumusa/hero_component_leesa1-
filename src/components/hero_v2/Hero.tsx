import { useState} from "react"
import "./Hero.css"
export interface iHero{
    image:string,
    iam:string,
    name:string,
    skills:string[],
    cskill:number,
    children:any
}
export function Hero({image,iam,name,skills,cskill}:iHero){


const [cntSkill, setcntSkill] = useState(0)

if(cntSkill >=0 && cntSkill<skills.length){

    setTimeout(()=>{return setcntSkill(cntSkill+1)}, 3000)
}else{   
     setcntSkill(0)
}
return(
        <>
        <div className="hero_container">
            <div className="left_hero_container">
                <div className="tex_wrapper">
                    <h3 className="hero_iam">{iam}</h3>
                    <h1 className="hero_name">{name}</h1>
                    <>
                      <h2 className="hero_skill">{skills[cntSkill]}</h2>
                    </>
                    
                    <div className="hero_buttons">
                      <button className="btn_hero">Hire me</button>  
                      <button className="btn_hero">Download CV</button>              
                </div>
                </div>
                
            </div>
            <div className="right_hero_container">
               <div className="image_container">
                 <img className="hero" src={image} alt="hero_image" height={600}/>
               </div>
            </div>
        </div>
        </>
    )
}