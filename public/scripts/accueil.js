const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Mon composant React</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Test1 value={count} />
    </div>
  );
};

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
