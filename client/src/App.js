import './App.css';
import Main from './views/Main';
import OnePet from './views/OnePet';
import NewPet from './views/NewPet';
import UpdatePet from './views/UpdatePet';
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Pet Shelter</h1> 
        <Link to ="/"><h5 className="navig">Home</h5></Link>&nbsp; | &nbsp;
        <Link to ="/new"><h5 className="navig">Add A Pet</h5></Link>
        <h6>These Pets Are Looking For a Furever Home!!!</h6>
      </div>
      <Router>
        <Main path ="/" />
        <OnePet path ="pets/:_id" />
        <NewPet path = "/new" />
        <UpdatePet path = "/pets/update/:_id" />
      </Router>
      
    </div>
  );
}

export default App;
