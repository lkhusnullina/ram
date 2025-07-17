import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from '../pages/profile/ProfilePage';
import MainPage from '../pages/main/MainPage';
import LayoutPage from '../pages/layout/LayoutPage';
import EpisodesPage from '../pages/episodes/EpisodesPage';
import LocationsPage from '../pages/locations/LocationsPage';
import EpisodePage from '../pages/episode/EpisodePage';
import LocationPage from '../pages/location/LocationPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/episode" element={<EpisodePage />} />
          <Route path="/location" element={<LocationPage />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
