const SendMail = () => {
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errMessage, setErrMessage] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    mail &&
      name &&
      message &&
      fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: mail, name: name, message: message }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setErrMessage("une erreur s'est produite dans l'envoi du mail");
            console.log(data.error);
          } else {
            setErrMessage("");
            setName("");
            setMessage("");
            setConfirmation("Votre message a été envoyé avec succès.");
            setTimeout(() => setConfirmation(""), 5000);
          }
        })
        .catch((error) => {
          setErrMessage(error.message);
        });
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
          required
        />
        <label htmlFor="senderName">Renseignez votre identité : </label>
        <input
          type="text"
          id="senderName"
          placeholder="Nom, prénom, fonction..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="senderMessage">Ecrivez votre message :</label>
        <textarea
          id="senderMessage"
          cols="40"
          rows="20"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
        <p style={{ color: "red" }}>{errMessage}</p>
        <button type="submit">Envoyer</button>
        <p>{confirmation}</p>
      </form>
    </div>
  );
};

const sendMailDiv = document.getElementById("sendMail");
const root = ReactDOM.createRoot(sendMailDiv);
root.render(<SendMail />);
