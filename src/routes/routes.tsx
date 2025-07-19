import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import LayoutPage from '../pages/layout/LayoutPage';
import EpisodesPage from '../pages/episodes/EpisodesPage';
import LocationsPage from '../pages/locations/LocationsPage';
import EpisodePage from '../pages/episode/EpisodePage';
import LocationPage from '../pages/location/LocationPage';
import CharacterPage from '../pages/character/CharacterPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<MainPage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/episode" element={<EpisodesPage />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="/location" element={<LocationsPage />} />
          <Route path="/location/:id" element={<LocationPage />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
