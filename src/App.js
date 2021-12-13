import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="titlered">Your name here</h1>
          <br />
          <img src="/imageInSrc.jpg" />
          <br />
          <img src="/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
