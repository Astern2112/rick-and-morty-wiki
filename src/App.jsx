import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import Character from './pages/Character';
import Episode from './pages/Episode';
import Location from './pages/Location';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="scroll-smooth">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<Character />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<Episode />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<Location />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
