import { Button } from "@/components/ui/button";
import { Plus, Share2, Trophy } from "lucide-react";
import heroImage from "@/assets/museum-hero.jpg";

const MuseumHeader = () => {
  return (
    <header className="relative bg-gallery-bg border-b border-border py-8 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              AI Translation Fails Museum
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A curated collection of hilarious AI translation mistakes, complete with human corrections and cultural context
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <Button variant="museum" size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Submit Fail
            </Button>
            <Button variant="exhibit" size="lg" className="gap-2">
              <Trophy className="w-5 h-5" />
              Top Rated
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Share2 className="w-5 h-5" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MuseumHeader;