import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const SubmissionForm = () => {
  return (
    <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-card to-gallery-bg border-border">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-foreground">Submit a Translation Fail</h3>
          <p className="text-muted-foreground">Help grow our collection of hilarious AI translation mistakes!</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="original-lang">Original Language</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="ja">Japanese</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="target-lang">Target Language</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="ja">Japanese</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="original-text">Original Text</Label>
            <Textarea 
              id="original-text"
              placeholder="Enter the original text..."
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ai-translation">AI Translation (The Fail)</Label>
            <Textarea 
              id="ai-translation"
              placeholder="What did the AI translate it as?"
              className="min-h-[80px] border-fail-highlight/30 focus:border-fail-highlight"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="correct-translation">Correct Translation</Label>
            <Textarea 
              id="correct-translation"
              placeholder="What should it actually say?"
              className="min-h-[80px] border-success-highlight/30 focus:border-success-highlight"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="context">Cultural Context (Optional)</Label>
            <Textarea 
              id="context"
              placeholder="Explain why this translation fail is funny or problematic..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fail-type">Failure Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="What kind of mistake is this?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="literal">Literal Translation</SelectItem>
                <SelectItem value="false-friends">False Friends</SelectItem>
                <SelectItem value="idiom">Idiom Misunderstanding</SelectItem>
                <SelectItem value="cultural">Cultural Misunderstanding</SelectItem>
                <SelectItem value="grammar">Grammar Error</SelectItem>
                <SelectItem value="context">Context Loss</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="museum" className="w-full gap-2 text-lg py-6">
            <Send className="w-5 h-5" />
            Submit Translation Fail
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SubmissionForm;