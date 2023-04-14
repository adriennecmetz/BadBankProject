function Balance() {
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState({ name: '', balance: 0 });

  function handleChange(event) {
    setData({ ...data, balance: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = ctx.users.find((user) => user.name === data.name);
    if (!user) {
      alert('User not found');
      return;
    }
    user.balance += parseFloat(data.balance);
    console.log(`Updated balance for ${user.name}: ${user.balance}`);
    setData({ name: '', balance: 0 });
  }

  return (
    <>
      {ctx.users.map((user, i) => (
        <Card
          key={i}
          bgcolor="success"
          txtcolor="white"
          header={`All data Summary: ${user.name}`}
          text={`User ${i + 1}`}
          allData={userInfo(user)}
        />
      ))}
      <Card
        bgcolor="primary"
        txtcolor="white"
        header="Balance"
        submitButtonLabel="Update"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(event) =>
              setData({ ...data, name: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="balance">Balance:</label>
          <input
            type="number"
            className="form-control"
            id="balance"
            onChange={handleChange}
            value={data.balance}
          />
        </div>
      </Card>
    </>
  );
}
