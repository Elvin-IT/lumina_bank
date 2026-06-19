import { HashRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { PersonalPage } from "./components/pages/PersonalPage";
import { BusinessPage } from "./components/pages/BusinessPage";
import { DigitalBankingPage } from "./components/pages/DigitalBankingPage";
import { SupportPage } from "./components/pages/SupportPage";
import { AboutPage } from "./components/pages/AboutPage";
import { LearningHubPage } from "./components/pages/LearningHubPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/personal"
          element={
            <Layout>
              <PersonalPage />
            </Layout>
          }
        />
        <Route
          path="/business"
          element={
            <Layout>
              <BusinessPage />
            </Layout>
          }
        />
        <Route
          path="/digital-banking"
          element={
            <Layout>
              <DigitalBankingPage />
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout>
              <SupportPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/learning-hub"
          element={
            <Layout>
              <LearningHubPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignupPage />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
