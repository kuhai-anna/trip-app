import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import { WeatherForecast } from 'components/WeatherForecast/WeatherForecast';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="weather/:city/:startDate/:endDate"
          element={<WeatherForecast />}
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
