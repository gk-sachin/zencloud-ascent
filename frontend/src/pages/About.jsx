
import Navbar from '../components/Navbar';
import "../assets/css/About.css"

const YourComponent = () => {
  return (
    <>
     <Navbar/>
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/w3images/team1.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Rishikesh</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>rishi@zencloud.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Sachin</h2>
              <p className="title">Co-Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>sachin@zencloud.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team3.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>Sai Sathyan</h2>
              <p className="title">CTO</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>sai@zencloud.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default YourComponent;
