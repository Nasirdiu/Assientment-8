import Product from "./components/Product/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
      <Question></Question>
    </div>
  );
}

export default App;
