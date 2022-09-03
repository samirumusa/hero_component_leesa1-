import React from 'react';
import './App.css';
import Navbar from  '../src/components/navbar/NavBar'
import {logoLink, navLinks, navItem} from '../src/components/navbar/Data'
import { Hero } from './components/hero/Hero';

const titles =[{title:navItem.home, active:'active', itemLink:navLinks.home},
{title:navItem.about, active:'', itemLink:navLinks.about},
{title:navItem.service, active:'', itemLink:navLinks.service},
{title:navItem.experience, active:'', itemLink:navLinks.experience},
{title:navItem.price, active:'', itemLink:navLinks.experience},
{title:navItem.review, active:'', itemLink:navLinks.review},
{title:navItem.team, active:'', itemLink:navLinks.team},
{title:navItem.blog, active:'', itemLink:navLinks.blog},
{title:navItem.contact, active:'', itemLink:navLinks.contact},

]

function App() {
  return (
    <div className="App">
      {/* <Navbar logo='My Logo' logoLinks={logoLink.logoLink} navTitles={titles}></Navbar> */}
     
      <Hero image="/images/hero.png" 
            iam="I am" 
            skills={['Software Developer','Android Developer', 'Graphic Designer']}
            cskill={0} 
            name="Sameer"></Hero>
    
    </div>
  );
}

export default App;
