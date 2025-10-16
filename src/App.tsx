import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import MentalHealth from './pages/MentalHealth';
import ETFEducation from './pages/ETFEducation';
import FinancialLiteracy from './pages/FinancialLiteracy';
import CommunityForum from './pages/CommunityForum';
import Challenges from './pages/Challenges';
import CrisisSupport from './pages/CrisisSupport';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/etf-education" element={<ETFEducation />} />
          <Route path="/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/crisis-support" element={<CrisisSupport />} />
        </Routes>
      </Layout>
    </Router>;
}