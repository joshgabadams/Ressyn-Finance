const {useState} = React;

function App(){

  const [email,setEmail] = useState("");

  const submitEmail = async () => {
    if(!email){
      alert("Please enter email")
      return
    }

    await fetch("http://localhost:5000/notify",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email})
    })

    alert("Thanks! We'll notify you when we launch 🚀")
    setEmail("")
  }

  return(
    <div className="main-container">
      <div className="container">

        <div className="header">
          <img src="assets/Ressyn_logo.svg" className="logo"/>
        </div>

        <img src="assets/logo.svg" className="main-logo"/>

        <h1>Coming Soon.</h1>
        <p>We are currently developing our site.<br/>Be the first to know when we launch.</p>

        <div className="email-row">
          <input
            className="email-input"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button className="notify-btn" onClick={submitEmail}>
            📩 Notify Me
          </button>
        </div>

        <div className="divider">or</div>

        <div className="innovation-section">
          <span className="innovation-label">Check out our current innovation</span>
          <a
            href="https://xora.ressynfinance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="xora-btn"
          >
            🚀 Visit Xora
          </a>
        </div>

        <div className="dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)