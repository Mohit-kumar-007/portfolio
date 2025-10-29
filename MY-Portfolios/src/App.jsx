import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DotGrid from "./components/DotGrid";
import Home from "./pages/Home"; // Keep Home eager loaded
import Footer from "./components/footer";
import { Toaster } from "./components/ui/toaster";

// Lazy load other pages for better performance
const Projects = lazy(() => import("./pages/Projects"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </QueryClientProvider>
);

const AppContent = () => (
  <div className="min-h-screen overflow-x-hidden w-full relative">
    {/* DotGrid Background */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <DotGrid
        dotSize={3}
        gap={20}
        baseColor="#a855f7"
        activeColor="#c084fc"
        proximity={120}
        speedTrigger={80}
        shockRadius={200}
        shockStrength={4}
        maxSpeed={4000}
        resistance={600}
        returnDuration={1.2}
      />
    </div>
    
    {/* Content */}
    <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-24 sm:pb-28 md:pb-32 relative z-10">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default App;
