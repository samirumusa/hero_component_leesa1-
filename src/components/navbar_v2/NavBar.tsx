import { ReactNode,useState } from "react";
import './NavBar.css'
type tTitle ={
    title:string,
    active:string,
    itemLink:string
}
export interface iNav{
  logo:ReactNode,
  logoLinks:string,
  navTitles:tTitle[],
}
 export default function NavBar ({logo,logoLinks,navTitles}:iNav) {
  const [navbarToggle, setNavbarToggle] = useState(false)
 
  return(
    <>
    {console.log(navTitles)}
   <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <div className="logo">
                  <a href={logoLinks} className="navbar-brand">{logo}</a>
                  <div className="toggle-btn">
                    <button type="button" className="navbar-toggler" onClick={()=>setNavbarToggle(!navbarToggle)} data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                </div>
               
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        {navTitles.map( (item,index) =>{
                         return(
                            <>
                            <div className={ navbarToggle ? "item-wrapper":"item-wrapper-active"}>
                                 <a href={item.itemLink} className={`nav-item nav-link ${item.active}`}>{item.title}</a>
                            </div>
                            </>
                        )})}
                        
                    </div>
                </div>
            </div>
        </div>
  
  </>
  )
}