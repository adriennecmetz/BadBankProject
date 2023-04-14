function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = ctx.users.find((user) => user.email === email && user.password === password);
    if (user) {
      ctx.setCurrentUser(user);
      setEmail('');
      setPassword('');
    } else {
      setShow(false);
    }
  
  
            setName('');
            setEmail('');
            setPassword('');
            setDeposit('');
            setWithdraw('');
            return;
        }
    }
};

  
  
  
  
  
  
  
  
  return (
    <Card
      bgcolor="success"
      header="Login"
      status={show ? '' : 'Invalid email or password'}
      body={
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <button type="submit" className="btn btn-light">
            Login
          </button>
        </form>
      }
    />
  );
}
