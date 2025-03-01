import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Editor from './pages/Editor';
import EventTicket from './pages/EventTicket';
import Events from './pages/Events';
import TitleSelection from './pages/TitleSelection';
import Introduction from './pages/Introduction';
import Submission from './pages/Submission';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/title" element={<TitleSelection />} />
      <Route path="/submission" element={<Submission />} />
      <Route path="/events" element={<Events />} />
      <Route path="/eventTicket" element={<EventTicket />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
}

export default App;
