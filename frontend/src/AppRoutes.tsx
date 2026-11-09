import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <span>home</span>
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>USER PROFILE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
