import Header from './components/header/';

function App() {
  return (
    <div className="App">
      <Header items ={['Home', 'About', 'Contact', 'Location', 'Projects']} />
      <Form />
    </div>
  );
}

export default App;
