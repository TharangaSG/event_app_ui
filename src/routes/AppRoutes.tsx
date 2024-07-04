import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EventPage from '../pages/EventPage';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';
import AboutPage from '@/pages/AboutPage';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/soon" element={<ComingSoon />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;