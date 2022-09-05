import React from 'react';
import './App.css';
import Navbar from  '../navbar/NavBar'
import {logoLink, navLinks, navItem} from '../navbar/Data'
import { Hero } from './Hero';

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

export function App() {
  return (
    <div className="App">
     <div className="app_bar">
        <Navbar logo='Starsoft' logoLinks={logoLink.logoLink} navTitles={titles}></Navbar>
     </div>
     <div className="main">
      <Hero image="/images/hero.png" 
              iam="I'm" 
              skills={['Software Developer','Android Developer', 'Graphic Designer']}
              cskill={0} 
              name="Sameer Musa">
        </Hero> 
     </div>
         
    </div>
  );
}