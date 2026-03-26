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
        <p>We are currently developing our site.</p>

        <div>
          <input
            className="email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <button className="notify-btn" onClick={submitEmail}>
          📩 Notify Me
        </button>

        {/* New button to Xora */}
        <a 
          href="https://xora.ressynfinance.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="notify-btn"
        >
          🚀 Check out our current innovation
        </a>

        <img src="assets/logo.svg" className="floating left-shape"/>
        <img src="assets/Vector.svg" className="floating right-shape"/>

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