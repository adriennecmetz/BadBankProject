function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [nextUserId, setNextUserId] = React.useState(1);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameEmpty, setNameEmpty] = React.useState(false);
  const [emailEmpty, setEmailEmpty] = React.useState(false);
  const [passwordEmpty, setPasswordEmpty] = React.useState(false);

  function handle(data){
    // Check if name, email, and password are empty
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }

    // Create a new user with a unique ID
    const newUser = {
      id: nextUserId,
      name: name,
      email: email,
      password: password,
      balance: 100
    };

    // Add the new user to the context's users array
    ctx.users.push(newUser);

    // Increment the nextUserId variable for the next user
    setNextUserId(nextUserId + 1);

    // Reset the input fields and error messages
    setName('');
    setEmail('');
    setPassword('');
    setNameEmpty(false);
    setEmailEmpty(false);
    setPasswordEmpty(false);

    // Return true to indicate that the form was submitted successfully
    return true;
  }

  function handleNameChange(e) {
    setName(e.target.value);
    setNameEmpty(false);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailEmpty(false);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordEmpty(false);
  }

  function handleNameBlur() {
    if (name === '') {
      setNameEmpty(true);
    }
  }

  function handleEmailBlur() {
    if (email === '') {
      setEmailEmpty(true);
    }
  }

  function handlePasswordBlur() {
    if (password === '') {
      setPasswordEmpty(true);
    }
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      handle={handle}
      submitButton="Create another account"
    >
      <div className="mb-3">
        <label htmlFor="name-input" className="form-label">Name</label>
        <input type="text" className={`form-control ${nameEmpty ? 'is-invalid' : ''}`} id="name-input" value={name} onChange={handleNameChange} onBlur={handleNameBlur} />
        {nameEmpty && <div className="invalid-feedback">Please enter your name.</div>}
      </div>
      <div className="
