
import Home from './Components/Home';
import Modules from './Components/Module';
import AboutUs from './Components/AbouUs';
import Course from './Components/Course';
import Examn from './Components/Examn';
import SignUp from './Components/SignUp';
import CreatModules from './Components/CreateModules';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
 <>
  <Router>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/modules' element={<Modules/>}/>
      <Route  path='/about' element={<AboutUs/>}/>
      <Route  path='/courses' element={<Course/>}/>
      <Route  path='/exams' element={<Examn />}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/create-modules' element={<CreatModules />}/>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
  </Router>
 </>
  );
}

export default App;
