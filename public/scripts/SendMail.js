const SendMail = () => {
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errMessage, setErrMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <p>...ou sinon, envoyez-moi un message via ce formulaire</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="senderMail">Renseignez votre adresse mail :</label>
        <input
          type="email"
          id="senderMail"
          placeholder="votre mail"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
        <label htmlFor="senderName">Renseignez votre identité : </label>
        <input
          type="text"
          id="senderName"
          placeholder="Nom, prénom, fonction..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="senderMessage">Ecrivez votre message :</label>
        <textarea
          id="senderMessage"
          cols="40"
          rows="20"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <p style={{ color: "red" }}></p>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

const sendMailDiv = document.getElementById("sendMail");
const root = ReactDOM.createRoot(sendMailDiv);
root.render(<SendMail />);
