import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/Home";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Home />
        <ScrollToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
