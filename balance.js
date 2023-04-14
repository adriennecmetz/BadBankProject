function Balance(){
  const ctx = React.useContex(UserContext);

    return(
        <Card 
        bgcolor="success"
        header="Balance"
        // eslint-disable-next-line no-restricted-globals
        status={status}
        body={show ?
            <BalanceForm setShow={setShow}/>:
                <BalanceMsg setShow={setShow}/>}
    /> 
    )
}

function BalanceMsg(props){
    return(<>
    <h5>Your balance has been sent to your email</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Back</button>
    </>);
}

function BalanceForm(props){
    const [email, setEmail]        = React.useState('');
    

    function handle(){
      ctx.users.push({ name: data.name, balance: data.balance });
      return true;
    }
  
    return (<>

   Name<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter name"
    value={name}
    onChange={e => setName(e.currentTarget.value)}/><br/>

    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Show Balance</button>
    </>);
}
