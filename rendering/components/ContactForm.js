const ContactForm = () => {
  return /*html*/ `
        <section id="contact">
            <h2>Contactez-moi !</h2>
            <div id="followMe">
                <p>Suivre mon actualité sur la toile :</p>
                <div>
                    <a href="https://github.com/MajorDown"><img src="/images/icons/github.svg" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/romain-fouillaron-b36673260/" target="_blank"><img src="/images/icons/linkedIn.svg" alt="LinkedIn" /></a>
                    <a href="https://www.facebook.com/romain.fouillaron/" target="_blank"><img src="/images/icons/facebook.svg" alt="facebook" /></a>
                </div>
            </div>
            <div id="contactMe">
                <p>Me contacter :</p>
                <div>
                    <p><img src="/images/icons/phone.svg" alt="téléphone" />07 69 14 06 28</p>
                    <p><img src="/images/icons/mail.svg" alt="mail" />romain.fouillaron[at]gmx.fr</p>
                </div>
                <div id="sendMail"></div>
            </div>
        </section>    
    `;
};

module.exports = ContactForm;
