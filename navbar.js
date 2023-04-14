function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-success bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create an account and start saving"> Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Log in to your account">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deposit money to your account">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Withdraw money from your account">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/" data-bs-toggle="tooltip" data-bs-placement="balance" title="View your account balance">Balance</a>
            </li>
    
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View all your account data">AllData</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
