import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import ModuleOverviewPage from "./pages/ModuleOverviewPage";
import SubPagePlaceholder from "./pages/SubPagePlaceholder";
import CampaignManagementPage from "./pages/CampaignManagementPage";
import SalesEnablementPage from "./pages/SalesEnablementPage";
import CustomerResourcesPage from "./pages/CustomerResourcesPage";
import ContentAssetsPage from "./pages/ContentAssetsPage";
import TargetFollowupPage from "./pages/TargetFollowupPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* 默认重定向到驾驶舱 */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        {/* 营销驾驶舱 */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route
          path="dashboard/:subId"
          element={<SubPagePlaceholder moduleId="dashboard" />}
        />

        {/* 策略与目标 */}
        <Route
          path="insights"
          element={<ModuleOverviewPage moduleId="insights" />}
        />
        <Route
          path="insights/:subId"
          element={<SubPagePlaceholder moduleId="insights" />}
        />

        <Route
          path="strategy"
          element={<ModuleOverviewPage moduleId="strategy" />}
        />
        <Route
          path="strategy/:subId"
          element={<SubPagePlaceholder moduleId="strategy" />}
        />

        {/* 资源与产品 */}
        <Route
          path="resources"
          element={<ModuleOverviewPage moduleId="resources" />}
        />
        <Route
          path="resources/customer-resources"
          element={<CustomerResourcesPage />}
        />
        <Route
          path="resources/:subId"
          element={<SubPagePlaceholder moduleId="resources" />}
        />

        {/* 客户资产 */}
        <Route
          path="customers"
          element={<Navigate to="/resources/customer-resources" replace />}
        />
        <Route
          path="customers/:subId"
          element={<Navigate to="/resources/customer-resources" replace />}
        />

        {/* 渠道与销售 */}
        <Route
          path="channels"
          element={<ModuleOverviewPage moduleId="channels" />}
        />
        <Route path="channels/enablement" element={<SalesEnablementPage />} />
        <Route
          path="channels/:subId"
          element={<SubPagePlaceholder moduleId="channels" />}
        />

        {/* 整合营销 */}
        <Route
          path="campaigns"
          element={<ModuleOverviewPage moduleId="campaigns" />}
        />
        {/* 活动管理 — 专属页面 */}
        <Route
          path="campaigns/management"
          element={<CampaignManagementPage />}
        />
        {/* 其他活动子页面 */}
        <Route path="campaigns/content" element={<ContentAssetsPage />} />
        <Route
          path="campaigns/:subId"
          element={<SubPagePlaceholder moduleId="campaigns" />}
        />

        {/* 绩效与复盘 */}
        <Route
          path="performance"
          element={<ModuleOverviewPage moduleId="performance" />}
        />
        <Route
          path="performance/target-followup"
          element={<TargetFollowupPage />}
        />
        <Route
          path="performance/:subId"
          element={<SubPagePlaceholder moduleId="performance" />}
        />

        {/* 未知路由重定向 */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
