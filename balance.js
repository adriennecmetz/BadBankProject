function BalanceByName(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ');

    return(
        <Card 
        bgcolor="success"
        header="Enter Your Name"
        status={status}
        body={show ?
            <BalanceForm setShow={setShow}/>:
                <BalanceMsg setShow={setShow}/>}
    /> 
    )
}

function BalanceMsg(props){
    return(<>
    <h5>Your balance is {props.balance}</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Back</button>
    </>);
}

function BalanceForm(props){
    const [name, setName]        = React.useState('');
    

    async function handle(){
        console.log(name);
        const url = `/account/balance/${name}`;
        var res  = await fetch(url);
        var data = await res.json();
        console.log(data);
        props.setShow(false);
        props.setBalance(data.balance);
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

