import './App.css';
import cj from './images/CJ Tech.jpg';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import TerminalIcon from '@mui/icons-material/Terminal';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import image1 from './images/portfolio-01.jpg';
import image2 from './images/portfolio-02.jpg';
import image3 from './images/portfolio-03.jpg';
import image4 from './images/portfolio-04.jpg';
import image5 from './images/portfolio-05.jpg';
import image6 from './images/portfolio-06.webp';


function App() {

  const [toggleMenu, setToggleMenu]  = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(()=>{

    const changeWidth =() =>{
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () =>{
        window.removeEventListener('resize', changeWidth)
    }
}, [])

  const toggleNav =() =>{
  setToggleMenu(!toggleMenu)
}

  return (
    <div className="App">
      <header className='px-4 py-4 flex justify-between align-center '>
        <div className='w-auto'>
        <a href='https://challenge-8546e.web.app/' target='_blank' rel="noreferrer"><img className='w-16 rounded-full object-cover bg-center ' src={cj} alt='cj-logo' /></a>
        </div>
        
        <div onClick={toggleNav} className='md:hidden  relative top-2 -right-48 z-30'>
        {toggleMenu ? <CloseIcon/>  : <MenuOutlinedIcon  />}</div>
        
        <div>
          {(toggleMenu || screenWidth > 768) &&(
           <ul className='bg-white px-2 grid grid-cols-1 shadow-md w-44 text-center absolute top-3 right-0 gap-4 cursor-pointer transition delay-150 duration-300 hover:ease-in-out delay:300 md:grid-cols-4 lg:grid-cols-4 lg:relative md:relative top-0 md:gap-2 lg:gap-2 lg:shadow-none md:shadow-none lg:w-auto md:w-auto  '>
           <li className='mt-10 hover:bg-violet-600 h-14 pt-4 md:mt-0 lg:mt-0  lg:hover:bg-transparent lg:hover:text-violet-600'><a href='#home'>Home</a></li>
           <li className='hover:bg-current h-14 pt-4 md:px-4 lg:hover:bg-transparent lg:hover:text-violet-600'><a href='#about'>About Me</a></li>
           <li className='hover:bg-violet-600 h-14 pt-4 md:px-4 lg:hover:bg-transparent lg:hover:text-violet-600'><a href='#service'>Service</a></li>
           <li className='hover:bg-violet-600 h-14 pt-4 md:px-4 lg:hover:bg-transparent lg:hover:text-violet-600'><a href='#my-work'>My work</a></li>
       </ul>
        )}
        </div>
      </header>


      <main className='mt-10 pb-52'>
        <section className='flex flex-col justify-center items-center text-center' id='home'>
          <h1 className='font-sans text-4xl font-extrabold text-gray-600'>Designer And Frontend Developer</h1>
          <h4 className='text-2xl'>I design and code beautifully simple things, and I love what I do.</h4>
          <img className='w-44' src='https://mattfarley.ca/img/mf-avatar.svg' alt='canva-logo'/>
          <img className='w-3/4 mt-10' src='https://mattfarley.ca/img/hero-devices.svg' alt='canva-logo'/>
        </section>


        <section className=' flex flex-col justify-center items-center text-center w-full bg-current h-96 relative ' id='about'>
            <h1 className='mt-4 text-3xl text-white mb-5 font-extrabold'>Hi, I’m Chijioke. Nice to meet you.</h1>
            <p className='text-lg max-w-xl text-white'>Since beginning my journey as a freelance designer over 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
        

        <div className='mt-28' id='service'>
          <div id='container' className='h-auto shadow-md bg-white grid grid-cols-1 lg:grid-cols-2 w-11/12 border-2 border-none rounded-xl divide-y lg:divide-x md:divide-x-0 divide-current   absolute top-72 left-4 md:left-8 lg:left-12'>
          
          <div className='flex flex-col items-center justify-center  py-10'>
          <div className=' p-3 bg-current text-center rounded-3xl'><LayersIcon fontSize='large' /></div>
          <h2 className='text-2xl font-bold py-3'>Designer</h2>
          <p className='w-72'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
          <br/>
          <span className='w-52 text-current font-bold'>Things I enjoy designing:</span>
          <span>UX, UI, Web,Logos</span>
          <br />
          <p className='text-current font-bold'>Design Tools:</p>
          <ul>
            <li>Affinity Designer</li>
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Pen & Paper</li>
            <li>Sketch</li>
            <li> Webflow</li>
          </ul>
          </div>

          <div className='flex flex-col items-center justify-center  py-10'>
          <div className=' p-3 bg-current text-center rounded-3xl'><TerminalIcon fontSize='large' /></div>
          <h2 className='text-2xl font-bold py-3' >Frontend Developer</h2>
          <p className='w-72'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
          <br/>
          <span className='w-52 text-current font-bold'>Languages I speak:</span>
          <span>HTML, CSS, Javascript, React</span>
          <br />
          <p className='text-current font-bold'>Dev Tools:</p>
          <ul>
            <li>Vs code</li>
            <li>Tailwind Css</li>
            <li>Github</li>
            <li>Terminal</li>
            <li>Codekit</li>
            <li>Redux</li>
          </ul>
          </div>

          </div>
        </div>
        </section>


        <section className='relative top-96 mt-42 mb-10 md:mt-42 lg:mt-44 h-full flex flex-col justify-center items-center text-center' id='my-work'>  
            <h1 className='text-3xl font-bold my-4 text-gray-600'>My Work</h1> 
            <p className='text-xl font-bold my-4'>Here are a few past design projects I've worked on. Want to see more? <a href='mailto:chijiokejames82@gmail.com'>Email me.</a></p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
              <a href='https://challenge-8546e.web.app/' target='_blank' rel="noreferrer">
                <img src={image1} className='w-72 hover:animate-pulse hover:scale-105' alt='computer' />
              </a>

              <a href='https://clock-4579b.web.app/' target='_blank' rel="noreferrer">
                <img src={image2} className='w-72 hover:animate-pulse hover:scale-105' alt='computer' />
              </a>

              <a href='https://netflix-cloner-e46d9.web.app/profile' target='_blank' rel="noreferrer">
                <img src={image3} className='w-72 hover:animate-pulse hover:scale-105' alt='computer'/>
              </a>

              <a href='https://obiweezy-clone.web.app/' target='_blank' rel="noreferrer">
                <img src={image4} className='w-72 hover:animate-pulse hover:scale-105' alt='computer'/>
              </a>

              <a href='https://obiweezy-clone.web.app/' target='_blank' rel="noreferrer">
                <img src={image5} className='w-72 hover:animate-pulse hover:scale-105' alt='computer'/>
              </a>

              <a href='https://obiweezy-clone.web.app/' target='_blank' rel="noreferrer">
                <img src={image6} className='h-72 w-72 hover:animate-pulse hover:scale-105' alt='computer'/>
              </a>
              
            </div>
        </section>
      </main>

      <footer >
        <div id='container' className='bg-current h-auto relative top-64 pb-14 '> 

          <div className='py-4 px-4  shadow-md rounded-xl  ml-5 lg:ml-10 w-11/12 bg-darkblue text-white flex flex-col lg:flex-row justify-around gap-4 items-center text-center mb-20 absolute -top-14'>
            <h1>Start a project</h1>
            <p  className='w-74'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
            <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold px-4 py-2 rounded'>Lets do this<ThumbUpAltIcon/></button>
          </div>

            <div className='flex flex-col text-white gap-8 items-center justify-center text-center '> 
            <img className='w-16 rounded-full object-cover bg-center mt-44 lg:mt-24' src={cj} alt='cj-logo' />
            <h3 className='w-44'>Living, learning, & leveling up one day at a time.</h3>
            <ul className='flex gap-8 items-center justify-center'>
              <li className='hover:bg-darkblue rounded-2xl p-1'> <a href='mailto:chijiokejames82@gmail.com' target='_blank' rel="noreferrer"><EmailOutlinedIcon /></a></li>
              <li className='hover:bg-darkblue rounded-2xl p-1'> <a href='' rel="noreferrer"><TwitterIcon/> </a></li>
              <li className='hover:bg-darkblue rounded-2xl p-1'> <a href='https://www.linkedin.com/in/chijioke-ogbuigbo-76087b230/' target='_blank' rel="noreferrer"><LinkedInIcon/></a> </li>
              <li className='hover:bg-darkblue rounded-2xl p-1'> <a href='https://wa.me/0812290430' target='_blank' rel="noreferrer"><WhatsAppIcon/></a> </li>
            </ul>
            </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
