function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);
  let balance = ctx.users[ctx.currentUserIndex].balance;
  let userName = ctx.users[ctx.currentUserIndex].name;

  console.log(`Balance of ${userName} is ${balance}`);

  function handle() {
    ctx.users.push({ name: data.name, balance: data.balance });
    return true;
  }

  return (
    <>
      <Card
        bgcolor="success"
        header="Balance"
        status={status}
        body={show ? <BalanceForm setShow={setShow} /> : <BalanceMsg setShow={setShow} />}
      />
      Name
      <br />
      <input type="input" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Show Balance
      </button>
    </>
  );
}
