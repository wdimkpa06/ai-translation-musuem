import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, Share2, MessageCircle } from "lucide-react";

interface TranslationCardProps {
  id: string;
  originalText: string;
  originalLanguage: string;
  aiTranslation: string;
  humanTranslation: string;
  targetLanguage: string;
  culturalContext?: string;
  failureType: string;
  rating: number;
  votes: number;
  submittedBy: string;
}

const TranslationCard = ({ 
  originalText, 
  originalLanguage, 
  aiTranslation, 
  humanTranslation, 
  targetLanguage,
  culturalContext,
  failureType,
  rating,
  votes,
  submittedBy
}: TranslationCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-gallery-bg border-border hover:border-primary/50 transition-all duration-500 hover:shadow-exhibit hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">
              {originalLanguage} → {targetLanguage}
            </Badge>
            <Badge variant="destructive" className="text-xs">
              {failureType}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-medium">{rating}/10</span>
            <span>({votes} votes)</span>
          </div>
        </div>

        {/* Original Text */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Original ({originalLanguage})
          </h3>
          <p className="text-lg font-medium text-foreground bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
            "{originalText}"
          </p>
        </div>

        {/* AI Translation (The Fail) */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-fail-highlight uppercase tracking-wide flex items-center gap-2">
            AI Translation Fail
            <span className="text-xs bg-fail-highlight/20 text-fail-highlight px-2 py-1 rounded">FAIL</span>
          </h3>
          <p className="text-lg text-foreground bg-fail-highlight/10 p-4 rounded-lg border-l-4 border-fail-highlight relative">
            "{aiTranslation}"
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-fail-highlight rounded-full flex items-center justify-center text-xs font-bold animate-glow-pulse">
              😱
            </div>
          </p>
        </div>

        {/* Human Translation (Correct) */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-success-highlight uppercase tracking-wide flex items-center gap-2">
            Human Translation
            <span className="text-xs bg-success-highlight/20 text-success-highlight px-2 py-1 rounded">CORRECT</span>
          </h3>
          <p className="text-lg text-foreground bg-success-highlight/10 p-4 rounded-lg border-l-4 border-success-highlight">
            "{humanTranslation}"
          </p>
        </div>

        {/* Cultural Context */}
        {culturalContext && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wide">
              Cultural Context
            </h3>
            <p className="text-sm text-muted-foreground bg-primary/5 p-4 rounded-lg border border-primary/20">
              {culturalContext}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="gap-2 hover:text-success-highlight">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-xs">Funny</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:text-fail-highlight">
              <ThumbsDown className="w-4 h-4" />
              <span className="text-xs">Not Funny</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs">Comment</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">by {submittedBy}</span>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TranslationCard;