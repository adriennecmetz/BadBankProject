function CreateAccount(){

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label + ' field cannot be blank.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function validatePassword(password) {
    if (password.length < 8) {
      setStatus("Error: Password must be at least 8 characters long.");
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'Name'))     return;
    if (!validate(email,    'Email'))    return;
    if (!validatePassword(password))    return;
    ctx.users.push({id: ctx.users.length+1, name, email, password, balance: 100});
    setShow(false);
    setStatus('Account created successfully.');
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name || !email || !password}>Create Account</button>
              </>
            ):(
              <>
              <h5>Account created successfully.</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
