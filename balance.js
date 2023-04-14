function Balance() {
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState({name: '', balance: 0});

  function handleChange(event) {
    setData({...data, balance: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userIndex = ctx.users.findIndex(user => user.name === data.name);
    if (userIndex === -1) {
      alert('User not found');
      return false;
    }
    const user = {...ctx.users[userIndex]};
    user.balance += parseFloat(data.balance);
    const updatedUsers = [...ctx.users];
    updatedUsers[userIndex] = user;
    ctx.setUsers(updatedUsers);
    setData({name: '', balance: 0});
    return true;
  }

  return (
    <Card
      bgcolor="success"
      header="Balance"
      submitButtonLabel="Update"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" onChange={event => setData({...data, name: event.target.value})} value={data.name}/>
      </div>
      <div className="form-group">
        <label htmlFor="balance">Balance:</label>
        <input type="number" className="form-control" id="balance" onChange={handleChange} value={data.balance}/>
      </div>
    </Card>
  );
}
