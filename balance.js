function Balance(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ');

    return(
        <Card 
        bgcolor="success"
        header="Balance"
        status={status}
        body={show ?
            <BalanceForm setShow={setShow}/>:
                <BalanceMsg setShow={setShow}/>}
    /> 
    )
}



function BalanceForm(props){
    const [email, setEmail]        = React.useState('');
    

    function handle(){
        console.log(name);
        const url = `/account/balance/${name}`;
        (async () => {
            var res  = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    
    }
    return (<>

    Email address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter name"
    value={name}
    onChange={e => setEmail(e.currentTarget.value)}/><br/>

    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Show Balance</button>
    </>);
}
