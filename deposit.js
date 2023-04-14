function Balance() {
    const ctx = React.useContext(UserContext); 
    const [show, setShow]      = React.useState(true);
    const [status, setStatus] = React.useState(' ');
    

  function handle() {
      ctx.users.push({ name: data.name, balance: data.balance});
      return true;
  }

  return (
      <Card
        bgcolor="success"
        header="Deposit"
        deposit={handle}
        submitButtonDeposit="Deposit Successful"
      />
  )
