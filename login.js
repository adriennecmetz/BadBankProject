function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);

  
  
  function handleLogin() {
    if (!validate(name,     'name'))     return;
    if (!validate(password, 'password')) return;
    for (let i = 0; i <= users.length - 1; i++){
        if (i === (users.length -1) && users[i].name !== name) {
            alert("Not a current user: Please create an account or try different credentials");
            setShow(true);
            clearForm();
            return;
        }
        if (name !== users[i].name){
            continue;
        }
        if (name === users[i].name && password !== users[i].password) {
            alert("Incorrect Password, try again...");
            setShow(true);
            setPassword('');
            return;
        }
        if (name === users[i].name && password === users[i].password){
            let userID = users[i].id;
            alert(`Current User is ${users[i].name} with id: ${userID}`);
            setShow(false);
            console.log(name, password, userID);
            assignUserID(userID);
            setName('');
            setEmail('');
            setPassword('');
            setDeposit('');
            setWithdraw('');
            return;
        }
    }
}

  
);
   

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
