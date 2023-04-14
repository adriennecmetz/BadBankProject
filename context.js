const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);


let currentUserIndex = 0;
function assignUserID(userID) {
    currentUserIndex = userID-1;
    return currentUserIndex;
};

function Card(props) {
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [name, setName]          = React.useState('');
    const [email, setEmail]        = React.useState('');
    const [password, setPassword]  = React.useState('');
    const [deposit, setDeposit]    = React.useState('');
    const [withdraw, setWithdraw]  = React.useState('');
    const ctx = React.useContext(UserContext);
    let users = [...ctx.users];
    
    let balance = users[currentUserIndex].balance;
    let userName = users[currentUserIndex].name;
    console.log(`Balance of ${userName} is ${balance}`);
  
  function validate(field, label) {
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        alert(`Enter field: ${label}`);
        return false;
    }
    if (field === deposit) {
        if (deposit <= 0) {
            alert("Invalid output, positive numbers only");
            return false;
        }
    }
    if (field === withdraw) {
        if (withdraw <= 0) {
            alert("Invalid output, positive numbers only");
            return false;
        }
    }
    if (field === email) {
      if (email.includes('@') === true) return true;
      else {
        alert("Enter Valid Email");
        return false;
      }
    }
    return true;
  }

  function validatePassword() {
    if (password.length < 8) {
      alert("Password should be at least 8 characters");
      return false;
    }
    return true;
  }

    function validateForm() {
        return validatePassword() && name.length > 0 && email.length > 0;
    }

    function validateLogin() {
        return validatePassword() && name.length > 0;
    }
    
    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name,     'name'))     return;
        if (!validate(email,    'email'))    return;
        if (!validatePassword()) return;
        ctx.users.push({id: users.length+1, name, email, password, balance: 100});
        setShow(false);
    }
    
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setDeposit('');
        setWithdraw('');
        setShow(true);
    }

    function handleDeposit() {
        console.log(name, `Deposit amount: ${deposit}`);
        if (!validate(name,       'name'))       return;
        if (!validate(deposit,    'deposit'))    return;
        if (name === users[currentUserIndex].name) {
          //ctx.users.push({deposit});
          users[currentUserIndex].balance += Number(deposit);
          setShow(false);
          return;
        } else {
            alert(`Incorrect User input.`);
            clearForm();
            setShow(true);
        }
    }

    function handleWithdraw() {
        if (!validate(name,    'name'))       return;
        if (!validate(withdraw,  'withdrawl'))    return;
        if (name === users[currentUserIndex].name){
            if ((Number(withdraw)) <= balance
