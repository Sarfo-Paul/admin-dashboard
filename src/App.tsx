/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from './components/Sidebar';
import { DashboardContent } from './components/DashboardContent';

export default function App() {
  return (
    <div className="dashboard-grid min-h-screen bg-bg-subtle" id="app-root">
      <Sidebar />
      <div className="overflow-y-auto h-screen" id="main-scroll-container">
        <DashboardContent />
      </div>
    </div>
  );
}

