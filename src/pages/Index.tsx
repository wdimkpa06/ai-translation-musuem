import MuseumHeader from "@/components/MuseumHeader";
import Gallery from "@/components/Gallery";
import LiveTranslator from "@/components/LiveTranslator";
import MuseumFooter from "@/components/MuseumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MuseumHeader />
      <Gallery />
      <LiveTranslator />
      <MuseumFooter />
    </div>
  );
};

export default Index;
