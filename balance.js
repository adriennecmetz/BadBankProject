function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState({withdraw: 0});

  function handleChange(event) {
    setData({...data, withdraw: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = ctx.users.find(user => user.name === ctx.currentUser);
    if (!user) {
      alert('User not found');
      return;
    }
    const newBalance = user.balance - parseFloat(data.withdraw);
    if (newBalance < 0) {
      alert('Insufficient balance');
      return;
    }
    user.balance = newBalance;
    setData({withdraw: 0});
    return true;
  }

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      submitButtonLabel="Withdraw Balance"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="balance">Balance:</label>
        <input type="number" className="form-control" id="balance" onChange={handleChange} value={data.withdraw}/>
      </div>
    </Card>
  );
}
