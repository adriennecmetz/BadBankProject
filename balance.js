function Balance() {
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState({name: '', balance: 0});

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
    console.log(user.balance);
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
