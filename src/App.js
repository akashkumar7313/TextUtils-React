
import Navbar from './camponotus/Navbar';
import TextForm from './camponotus/TextForm';


function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below."/>
    </div>
    </>
  );
}

export default App;
