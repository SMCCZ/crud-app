import "./AuthCard.css";
function AuthCard({provider,onDelete}) {
  return (
    <div className="Auth-Card">
      <h3>Admin</h3>
      <p>
        Please authenticate through the auth {provider} and came back to the app.
      </p>
      <button className="App-Button" onClick={buttonClick(12)}>
        Continue
      </button>
      <button className="App-Button" onClick={()=>onDelete(provider)}>
        Delete
      </button>
    </div>
  );
  function buttonClick(data) {
    return () => {
      console.log("Button clicked " + data);
    };
  }
}

export default AuthCard;
