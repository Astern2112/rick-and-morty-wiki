import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import Quotes from './pages/Quotes';
import Trivia from './pages/Trivia';
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
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
