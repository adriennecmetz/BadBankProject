function CreateAccount() {
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  let userNumber = users.length;

  function handle(data){
    if (!data.name) {
      alert("Please enter your name.");
      return false;
    } else if (!data.email) {
      alert("Please enter your email.");
      return false;
    } else if (data.password.length < 8) {
      alert("Your password must be at least 8 characters long.");
      return false;
    } else {
      ctx.users.push({id: userNumber, name: data.name, email: data.email, password: data.password, balance: 100 });
      return true;
    }
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      handle={handle}
      submitButton="Create another account"
    />
  )
}
