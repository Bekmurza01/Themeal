import React, {useState, useEffect} from 'react'
import apiClient from '../axios/apiClient'
import './Home.css'
import ProductList from '../components/ProductList/ProductList'
import image2 from '../assets/meal-icon.png'
import Paypai from '../assets/Paypai.png'
import icon1 from '../assets/meal-icon1.png'
import icon2 from '../assets/meal-icon2.png'
import icon3 from '../assets/image-icon3.png'
import foto1 from '../assets/foto1.jpg'
import Country from '../components/Country/Country'
import { Link } from 'react-router-dom'

function Home() {
  const [products, setProducts] = useState([])

  async function getProduct() {
    try {
      const res = await apiClient.get("/search.php?s=a")
      console.log(res);
      setProducts(res.data.meals)
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }
  useEffect (() => {
    getProduct()
  }, [])
  return (
    <div className='container-home'>
      <div className='container1'>
        <div>
          <img src={image2} alt="Meal Icon" />
        </div>
        <div>
          <h1>Welcome to TheMealDB</h1>
          <p className='p1'>
            Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
            <br />We also offer a <span className='guron'>free recipe API</span> for anyone wanting to use it, with additional features for subscribers.
          </p>
          <img className='paypai' src={Paypai} alt="PayPal" />
          <p>Click button above to upgrade free Recipe API to premium.
            <br /> $3 month and cancel anytime. Currently 54 supporters.
          </p>
        </div>
        <div>
          <img src={image2} alt="Meal Icon" />
        </div>
      </div>

      <div className='total'>
        <input type="text" placeholder='Search for a Meal...' />
        <div className='icon'>
          <img src={icon1} alt="Meal Icon" />
          <p>Total Meals: 303</p>

          <div className='icon2'>
            <img src={icon2} alt="Ingredients Icon" />
            <p>Total Ingredients: 575</p>
          </div>

          <img src={icon3} alt="Images Icon" />
          <p>Images: 303</p>
        </div>
      </div>

<div>
  <ProductList data={products}/>
  <Country/>
</div>
      <div className='tamaktar'>
        <h3>Latest Meals</h3>
        <div className='cards'>
          <div className='card'>
          <img src={foto1} alt="" />
          <p>15-minute chicken & halloumi burgers</p>
          </div>
        </div>
      </div>

      {/* <div className='bukva'>
        <h2 className='ahref'>
          <a href="./Bukva.jsx">A</a>/
          <a href="./Bukva.jsx">B</a>/
          <a href="./Bukva.jsx">C</a>/
          <a href="./Bukva.jsx">D</a>/
          <a href="./Bukva.jsx">E</a>/
          <a href="./Bukva.jsx">F</a>/
          <a href="./Bukva.jsx">G</a>/
          <a href="./Bukva.jsx">H</a>/
          <a href="./Bukva.jsx">I</a>/
          <a href="./Bukva.jsx">J</a>/
          <a href="./Bukva.jsx">K</a>/
          <a href="./Bukva.jsx">L</a>/
          <a href="./Bukva.jsx">M</a>/
          <a href="./Bukva.jsx">N</a>/
          <a href="./Bukva.jsx">O</a>/
          <a href="./Bukva.jsx">P</a>/
          <a href="./Bukva.jsx">Q</a>/
          <a href="./Bukva.jsx">R</a>/
          <a href="./Bukva.jsx">S</a>/
          <a href="./Bukva.jsx">T</a>/
          <a href="./Bukva.jsx">U</a>/
          <a href="./Bukva.jsx">V</a>/
          <a href="./Bukva.jsx">W</a>/
          <a href="./Bukva.jsx">X</a>/
          <a href="./Bukva.jsx">Y</a>/
          <a href="./Bukva.jsx">Z</a>
        </h2>
      </div> */}
       <h2 className='ahref'>
      {['A /', 'B /', 'C /', 'D /', 'E /', 'F /', 'G /', 'H /', 'I /', 'J /', 'K /', 'L /', 'M /', 'N /', 'O /', 'P /', 'Q /', 'R /', 'S /', 'T /', 'U /', 'V /', 'W /', 'X /', 'Y /', 'Z '].map(letter => (
        <Link to={`/bukva/${letter}`} key={letter}>
          {letter}
        </Link>
      ))}
    </h2>
    </div>
  )
}

export default Home;
