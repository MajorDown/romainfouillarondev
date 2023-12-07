const ReactApp = (props) => {
  let scriptsList = "";
  props.map((script) => {
    scriptsList += /*html*/ `<script src="${script}" type="text/babel"></script>`;
  });

  return /*html*/ `
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  ${scriptsList}
  `;
};

module.exports = ReactApp;
