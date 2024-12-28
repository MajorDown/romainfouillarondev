const Footer = () => {
  const year = new Date().getFullYear();

  return /*html*/ `
        <footer>
            <p>© Copyright ${year} - Tout droit réservé</p>
        </footer>
    
    `;
};

module.exports = Footer;
