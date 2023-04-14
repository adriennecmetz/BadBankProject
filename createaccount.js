function CreateAccount() {
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  let userNumber = users.length;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
    if (!value) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  }

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
    if (!value) {
      setEmailError('Email is required');
    } else if (!isValidEmail(value)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !password || nameError || emailError || passwordError) {
      alert('Please fix the errors in the form');
      return;
    }
    ctx.users.push({id: userNumber, name: name, email: email, password: password, balance: 100 });
    setName('');
    setEmail('');
    setPassword('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
    alert('Account created successfully');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
        {nameError && <div className="text-danger">{nameError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        {emailError && <div className="text-danger">{emailError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
        {passwordError && <div className="text-danger">{passwordError}</

