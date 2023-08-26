import './App.scss'
import Navigation from './navigation/navigation';

import headlineMobile from './assets/images/image-web-3-mobile.jpg';
import headlineWeb from './assets/images/image-web-3-desktop.jpg';
import sub01 from './assets/images/image-retro-pcs.jpg';
import sub02 from './assets/images/image-top-laptops.jpg';
import sub03 from './assets/images/image-gaming-growth.jpg';

import { useEffect, useState } from 'react';

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentWidth());

  function getCurrentWidth(){
    return window.innerWidth
  }

  useEffect(() => {
    const updateWidth = () => {
      setScreenSize(getCurrentWidth())
    }
    window.addEventListener('resize', updateWidth);
    
    return(() => {
        window.removeEventListener('resize', updateWidth);
    })
  }, [screenSize])

  return (
    <>
    <div className="wrapper">
      <Navigation></Navigation>
      <main>

        <article className="headline">
          <div className="headline-image">
            <img src={`${screenSize <= 768 ? headlineMobile : headlineWeb}`} alt="web-3" />
          </div>
          <h1>The Bright Future of Web 3.0?</h1>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?</p>
          <button>Read more</button>
        </article>


        <section className="new">
          <p className="head">New</p>

          <article>
            <a href=''>Hydrogen VS Electric Cars</a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>

          <span className="spacer"></span>

          <article>
            <a href=''>The Downsides of AI Artistry</a>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>

          <span className="spacer"></span>

          <article>
            <a href=''>Is VC Funding Drying Up?</a>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </section>


        <section className="sub">
          <article>
            <div className="article-photo">
              <img src={`${sub01}`} alt="Retro PCs" />
            </div>
            <span className="number">01</span>
            <a href=''>Reviving Retro PCs</a>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>

          <article>
            <div className="article-photo">
              <img src={`${sub02}`} alt="Laptops" />
            </div>
            <span className="number">02</span>
            <a href=''>Top 10 Laptops of 2022</a>
            <p>Our best picks for various needs and budgets.</p>
          </article>
          
          <article>
            <div className="article-photo">
              <img src={`${sub03}`} alt="Retro PCs" />
            </div>
            <span className="number">03</span>
            <a href=''>The Growth of Gaming</a>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </article>
        </section>
      </main>


      <footer>
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
        <p>Coded by Dennis Brüning.</p>
      </footer>
    </div>
    </>
  )
}

export default App
