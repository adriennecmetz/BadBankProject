function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [nextUserId, setNextUserId] = React.useState(1);

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

    // Return true to indicate that the form was submitted successfully
    return true;
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      handle={handle}
      submitButton="Create another account"
    />
  );
}
