import TranslationCard from "./TranslationCard";

// Mock data for demonstration
const translationFails = [
  {
    id: "1",
    originalText: "I am pregnant",
    originalLanguage: "English",
    aiTranslation: "I am embarrassed",
    humanTranslation: "Estoy embarazada",
    targetLanguage: "Spanish",
    culturalContext: "The AI confused 'embarazada' (pregnant) with 'embarazoso' (embarrassed), a classic false friend that can lead to very awkward situations!",
    failureType: "False Friends",
    rating: 9.2,
    votes: 247,
    submittedBy: "linguist_sarah"
  },
  {
    id: "2", 
    originalText: "Exit the building",
    originalLanguage: "English",
    aiTranslation: "成功した建物",
    humanTranslation: "建物から出る",
    targetLanguage: "Japanese",
    culturalContext: "The AI translated 'exit' as 'success' (成功) instead of 'leave/go out' (出る), completely changing the meaning from an emergency instruction to a celebration!",
    failureType: "Word Confusion",
    rating: 8.7,
    votes: 156,
    submittedBy: "tokyo_translator"
  },
  {
    id: "3",
    originalText: "Hot dog",
    originalLanguage: "English", 
    aiTranslation: "Chien chaud",
    humanTranslation: "Hot-dog",
    targetLanguage: "French",
    culturalContext: "The AI literally translated 'hot dog' as 'chien chaud' (hot dog/warm dog), when it should have kept 'hot-dog' as the borrowed term French uses for the food.",
    failureType: "Literal Translation",
    rating: 7.5,
    votes: 203,
    submittedBy: "paris_foodie"
  },
  {
    id: "4",
    originalText: "I'm running late",
    originalLanguage: "English",
    aiTranslation: "Ich renne spät",
    humanTranslation: "Ich komme zu spät",
    targetLanguage: "German",
    culturalContext: "The AI translated each word individually: 'running' as 'renne' (literally running) and 'late' as 'spät', creating the nonsensical 'I run late' instead of the idiomatic 'I'm coming late'.",
    failureType: "Idiom Misunderstanding",
    rating: 8.1,
    votes: 189,
    submittedBy: "berlin_student"
  }
];

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Gallery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-card to-gallery-bg rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">247</div>
            <div className="text-muted-foreground">Translation Fails</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-gallery-bg rounded-xl border border-border">
            <div className="text-3xl font-bold text-accent mb-2">15</div>
            <div className="text-muted-foreground">Languages</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-gallery-bg rounded-xl border border-border">
            <div className="text-3xl font-bold text-success-highlight mb-2">1.2K</div>
            <div className="text-muted-foreground">Corrections</div>
          </div>
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Fails</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {translationFails.slice(0, 2).map((fail) => (
              <TranslationCard key={fail.id} {...fail} />
            ))}
          </div>
        </section>

        {/* All Fails */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Recent Submissions</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {translationFails.slice(2).map((fail) => (
              <TranslationCard key={fail.id} {...fail} />
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-exhibit hover:scale-105 transition-all duration-300">
            Load More Fails
          </button>
        </div>
      </div>
    </main>
  );
};

export default Gallery;