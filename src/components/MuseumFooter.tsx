import { Button } from "@/components/ui/button";
import { Github, Twitter, Heart, Globe } from "lucide-react";

const MuseumFooter = () => {
  return (
    <footer className="bg-gallery-bg border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Translation Fails Museum
            </h3>
            <p className="text-sm text-muted-foreground">
              Preserving humanity's funniest AI translation mistakes for future generations.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Explore</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Featured Fails</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Top Rated</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Recent Submissions</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Random Fail</a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Categories</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">False Friends</a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">Literal Translations</a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">Cultural Mishaps</a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">Idiom Disasters</a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Community</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-success-highlight transition-colors">Submit a Fail</a>
              <a href="#" className="block text-muted-foreground hover:text-success-highlight transition-colors">Leaderboard</a>
              <a href="#" className="block text-muted-foreground hover:text-success-highlight transition-colors">Guidelines</a>
              <a href="#" className="block text-muted-foreground hover:text-success-highlight transition-colors">API</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 AI Translation Fails Museum. Made with <Heart className="w-4 h-4 inline text-fail-highlight" /> for language lovers.
            </p>
            <p className="text-sm text-muted-foreground">
              Helping humans understand AI limitations, one mistranslation at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MuseumFooter;