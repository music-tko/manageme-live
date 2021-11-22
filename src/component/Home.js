import About from './homeset/About'

const Home = () => {
    return ( 
        <div>
          <header>
            <h1>Welcome To ManageMe</h1>
            <p className="">Making your Life Easier To Plan</p>
            {/* <img src={clock} alt="..."/>  */}
          </header>
          <About />
        </div>
     );
}
 
export default Home;