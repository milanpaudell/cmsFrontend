const Home = () => {
    return (
   <div>
    <header>
          <nav>
              <div className="container">
                  <h1><a href="#">Milan Paudel</a></h1>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/contact">Contact</a></li>
                  </ul>
              </div>
          </nav>
      </header>
  
      <section className="hero">
          <div className="container">
              <h2>Welcome to Milan</h2>
              <p>Hi! I am Milan Paudel</p>
          </div>
      </section>
      
      <footer>
          <div className="container">
              <p>&copy; 2023 Milan. All rights reserved.</p>
          </div>
      </footer>
   </div>
    )
  }
  
  export default Home