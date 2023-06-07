import Page404 from 'page/error/page_404';
import Home from 'page/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="123/" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;