const App = () => {
  return (
    <Template>
      <h1>Home Page</h1>
    </Template>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);