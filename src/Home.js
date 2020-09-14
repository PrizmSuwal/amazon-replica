import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      
        <div className="home__row">
          <Product 
            title="USB A Cable for Apple iPhone and iPad - 6 Feet - 2 -Pack - White"
            price={3}
            image="https://images-na.ssl-images-amazon.com/images/I/613Wvm%2BVqKL._AC_SL1500_.jpg"
            rating={4}/>
          <Product 
            title="Thermos Funtainer Food Jar, Frozen, 10 Ounce (Pack of 1)"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_.jpg"
            rating={4}/>
        </div>

        <div className="home__row">
          <Product 
            title="Finishing Touch Flawless Legs Women's Hair Remover"
            price={48.99}
            image="https://images-na.ssl-images-amazon.com/images/I/4179wyn085L.jpg"
            rating={4}/>
          <Product 
            title="AmazonBasics Premium 18-Piece Kitchen Knife Block Set"
            price={68.25}
            image="https://images-na.ssl-images-amazon.com/images/I/71wgBcgorlL._AC_SY879_.jpg"
            rating={4}/>
          <Product 
            title="Lovaru Womens Boho Open Front Cardigan Colorblock Long Sleeve Loose Knit Lightweight Sweaters"
            price={21.88}
            image="https://images-na.ssl-images-amazon.com/images/I/71qQWV573AL._AC_SY550._SX._UX._SY._UY_.jpg"
            rating={2}/>
        </div>

        <div className="home__row">
          <Product 
            title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71zEiQWAUoL._AC_SL1500_.jpg"
            rating={3}/>
          
        </div>
      </div>
    </div>
  )
}

export default Home