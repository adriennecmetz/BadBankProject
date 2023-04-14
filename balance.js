function Balance() {
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState({balance: 0});

  function handleChange(event) {
    setData({...data, balance: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = ctx.users.find(user => user.name === data.name);
    if (!user) {
      alert('User not found');
      return;
    }
    user.balance += parseFloat(data.balance);
    setData({balance: 0});
    return true;
  }

  return (
    <Card
      bgcolor="primary"
      header="Balance"
      submitButtonLabel="Update"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" onChange={event => setData({...data, name: event.target.value})}/>
      </div>
      <div className="form-group">
        <label htmlFor="balance">Balance:</label>
        <input type="number" className="form-control" id="balance" onChange={handleChange} value={data.balance}/>
      </div>
    </Card>
  );
}
