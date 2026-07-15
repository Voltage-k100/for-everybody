import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Switch, Route } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { MobileHeader } from "./components/MobileHeader";

function AppShell() {
  const [route, setRoute] = useState("home");

  const handleNavigate = (r: string) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (route) {
      case "home":
        return <Home />;
      case "explore":
        return <Explore />;
      case "notifications":
        return <Notifications />;
      case "messages":
        return <Messages />;
      case "bookmarks":
        return <Bookmarks />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <NotFound />;
    }
  };

  const showMobileLogo = route === "home" || route === "explore";
  const mobileTitle = {
    home: "Início",
    explore: "Explorar",
    notifications: "Notificações",
    messages: "Mensagens",
    bookmarks: "Guardados",
    profile: "Perfil",
    settings: "Definições",
  }[route] || "";

  return (
    <div className="flex min-h-screen bg-background">
      <LeftSidebar activeRoute={route} onNavigate={handleNavigate} />

      <main className="flex-1 min-w-0 max-w-[600px] mx-auto md:mx-0 md:border-r md:border-border pb-14 md:pb-0">
        <MobileHeader title={mobileTitle} showLogo={showMobileLogo} />
        {renderPage()}
      </main>

      <RightSidebar onNavigate={handleNavigate} />
      <MobileBottomNav activeRoute={route} onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <AppShell />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
