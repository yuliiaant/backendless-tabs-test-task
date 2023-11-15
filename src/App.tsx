import { Route, Routes, Navigate } from "react-router-dom";
import LazyLoader from './components/LazyLoader/LazyLoader';
import { TabsPage } from './TabsPage';
import { sortedTabs } from './utils/functions';
import './App.scss';

function App() {
  return (
    <div className="App">
      <TabsPage />

      <Routes>
        <Route path="/*" element={<Navigate to={sortedTabs[0].path} />} />

        {sortedTabs.map(tab => (
          <Route
          key={tab.id}
          path={tab.path}
          element={<LazyLoader path={tab.path} />}
      />
        ))}
      </Routes>
    </div>
  );
}

export default App;
