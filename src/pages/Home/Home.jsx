import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Navbar/button/Button"

const Home = () => {
    return (
   <div>
        <Navbar />
        <Button title='Login' color='red'/>
        {/* <Button title='Login', subTitle='Forgot'/> */}
        <Button title='Signup' color='green'/>
  
      <section className="hero">
          <div className="container">
              <h2>Welcome to Milan</h2>
              <p>Hi! I am Milan Paudel</p>
          </div>
      </section>
      
      <footer>
          <div className="container"/>
              <p>&copy; 2023 Milan. All rights reserved.</p>
      </footer>
    </div>
    )
  }
  
  export default Home