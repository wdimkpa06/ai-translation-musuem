import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Settings, Zap, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LiveTranslator = () => {
  const [apiKey, setApiKey] = useState("");
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [translation, setTranslation] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedApiKey = localStorage.getItem("google-translate-api-key");
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("google-translate-api-key", apiKey.trim());
      setIsApiKeyModalOpen(false);
      toast({
        title: "API Key Saved",
        description: "Your Google Translate API key has been saved securely in your browser.",
      });
    }
  };

  const translateText = async () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please set your Google Translate API key first.",
        variant: "destructive",
      });
      setIsApiKeyModalOpen(true);
      return;
    }

    if (!inputText.trim() || !sourceLang || !targetLang) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before translating.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: inputText,
            source: sourceLang,
            target: targetLang,
            format: "text",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      setTranslation(data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      toast({
        title: "Translation Failed",
        description: "Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "nl", name: "Dutch" },
    { code: "sv", name: "Swedish" },
    { code: "ko", name: "Korean" },
    { code: "pt", name: "Portuguese" },
    { code: "ja", name: "Japanese" },
    { code: "zh", name: "Chinese" },
    { code: "ha", name: "Hausa" },
    { code: "yo", name: "Yoruba" },
    { code: "ig", name: "Igbo" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-sm font-medium">
            <Zap className="w-3 h-3 mr-1" />
            Live Demo
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">Test Live Translations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See AI translation mistakes happen in real-time! Compare Google Translate results with human cultural understanding.
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-gallery-bg border-border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Live Translation Tester</h3>
            <Dialog open={isApiKeyModalOpen} onOpenChange={setIsApiKeyModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  {apiKey ? "Update" : "Set"} API Key
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Google Translate API Key</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get your free API key from the{" "}
                    <a 
                      href="https://console.cloud.google.com/apis/library/translate.googleapis.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Cloud Console
                    </a>
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input
                      id="api-key"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your Google Translate API key"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <p className="text-xs text-warning">
                      Your API key is stored locally in your browser and never sent to our servers.
                    </p>
                  </div>
                  <Button onClick={saveApiKey} className="w-full">
                    Save API Key
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label>From Language</Label>
              <Select value={sourceLang} onValueChange={setSourceLang}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>To Language</Label>
              <Select value={targetLang} onValueChange={setTargetLang}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Text to Translate</Label>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate (try idioms or cultural phrases!)"
                className="min-h-[100px]"
              />
            </div>

            <Button 
              onClick={translateText} 
              disabled={isTranslating || !apiKey}
              className="w-full"
              variant="museum"
            >
              {isTranslating ? "Translating..." : "Translate with AI"}
            </Button>

            {translation && (
              <div className="space-y-2">
                <Label>AI Translation Result</Label>
                <div className="p-4 bg-fail-highlight/10 border border-fail-highlight/20 rounded-lg">
                  <p className="text-foreground">{translation}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  💡 Now think: Does this capture the cultural context and true meaning?
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LiveTranslator;