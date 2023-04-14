function CreateAccount() {
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  let userNumber = users.length;

  function handle(data){
  var name = data.name;
  var email = data.email;
  var password = data.password;

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

  ctx.users.push({id: userNumber++, name: name, email: email, password: password, balance:100 });
  return true;
}


  return (
      <Card
        bgcolor="success"
        header="Create Account"
        handle={handle}
        submitButton="Create another account"
      />
  )
}
