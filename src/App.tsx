import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactFlowView from './pages/reactFlowView';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/react-flow" element={<ReactFlowView />} />
      </Routes>
    </BrowserRouter>
  );
}
