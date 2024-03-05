
import './App.css';
import Content from './components/Content';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

// Main App component containing the structure of the website
function App() {
  return (
    <div className="App">
      {/* Render the navigation bar */}
      <Navbar />
      <div className='body'>
        {/* Render the header section */}
        <Header />
        {/* Render the content section */}
        <Content />
        {/* Render the deals section */}
        <Deals />
        {/* Render the sign-up section */}
        <SignUp />
      </div>
      {/* Render the footer section */}
      <Footer />
    </div>
  );
}

export default App;