import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Upload, LogOut, History, Sparkles, ImageIcon, X, FolderOpen, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Sample design images
import villaDesign1 from "@/assets/villa-design1.jpg";
import villaDesign2 from "@/assets/villa-design2.jpg";
import villaDesign3 from "@/assets/villa-design3.jpg";
import villaDesign4 from "@/assets/villa-design4.jpg";

interface Project {
  id: string;
  name: string;
  originalImage: string;
  designs: string[];
  createdAt: Date;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([]);
  const [projectHistory, setProjectHistory] = useState<Project[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  const sampleDesigns = [villaDesign1, villaDesign2, villaDesign3, villaDesign4];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/auth");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setGeneratedDesigns([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDesigns = () => {
    if (!uploadedImage) {
      toast({
        title: "No image uploaded",
        description: "Please upload a yard image first.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      setGeneratedDesigns(sampleDesigns);
      setIsGenerating(false);
      
      const newProject: Project = {
        id: Date.now().toString(),
        name: `Garden Design ${projectHistory.length + 1}`,
        originalImage: uploadedImage,
        designs: sampleDesigns,
        createdAt: new Date(),
      };
      setProjectHistory((prev) => [newProject, ...prev]);
      
      toast({
        title: "Designs generated!",
        description: "4 design variations have been created for your yard.",
      });
    }, 2000);
  };

  const handleClearUpload = () => {
    setUploadedImage(null);
    setGeneratedDesigns([]);
  };

  const loadProjectFromHistory = (project: Project) => {
    setUploadedImage(project.originalImage);
    setGeneratedDesigns(project.designs);
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Neighborbrite</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 bg-card hover:bg-muted"
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
              <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                {projectHistory.length}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Design</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Transform Your Yard
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Upload an image of your yard and get 4 unique AI-powered design variations
            </p>
          </div>

          {/* Project History Sidebar */}
          {showHistory && (
            <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex justify-end">
              <div 
                className="absolute inset-0" 
                onClick={() => setShowHistory(false)} 
              />
              <div className="relative w-full max-w-md bg-card border-l border-border h-full overflow-y-auto p-6 animate-in slide-in-from-right shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Project History</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowHistory(false)}
                    className="hover:bg-muted"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                {projectHistory.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <History className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-foreground font-medium mb-1">No projects yet</p>
                    <p className="text-sm text-muted-foreground">Upload an image to get started</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {projectHistory.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => loadProjectFromHistory(project)}
                        className="group cursor-pointer p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-card transition-all"
                      >
                        <div className="flex gap-4">
                          <img
                            src={project.originalImage}
                            alt={project.name}
                            className="w-20 h-20 object-cover rounded-lg border border-border"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {project.name}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                              <Clock className="w-3.5 h-3.5" />
                              {project.createdAt.toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                              <ImageIcon className="w-3.5 h-3.5" />
                              {project.designs.length} designs
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Upload Section */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Area */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Upload className="w-4 h-4 text-primary" />
                  </div>
                  Upload Your Yard Image
                </h2>
                
                {uploadedImage ? (
                  <div className="relative group">
                    <img
                      src={uploadedImage}
                      alt="Uploaded yard"
                      className="w-full h-64 object-cover rounded-xl border border-border"
                    />
                    <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleClearUpload}
                        className="shadow-lg"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-all group">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <ImageIcon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-foreground font-medium mb-1">
                      Click to upload
                    </span>
                    <span className="text-sm text-muted-foreground">
                      PNG, JPG up to 10MB
                    </span>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Generate Button Section */}
              <div className="flex flex-col justify-center items-center text-center p-6 bg-accent/30 rounded-xl border border-accent">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative">
                  <Sparkles className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ready to Transform?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xs">
                  Our AI will analyze your yard and generate 4 unique design concepts
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleGenerateDesigns}
                  disabled={!uploadedImage || isGenerating}
                  className="min-w-[200px]"
                >
                  {isGenerating ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Designs
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Generated Designs */}
          {generatedDesigns.length > 0 && (
            <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 bg-highlight/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-highlight" />
                  </div>
                  Your Design Variations
                </h2>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  4 designs
                </span>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {generatedDesigns.map((design, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedDesign(design)}
                    className="group relative rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <img
                      src={design}
                      alt={`Design ${index + 1}`}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <span className="text-primary-foreground font-semibold">
                          Design {index + 1}
                        </span>
                        <p className="text-primary-foreground/70 text-sm">Click to view</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground font-semibold text-sm border border-border">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design Preview Modal */}
          {selectedDesign && (
            <div
              className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedDesign(null)}
            >
              <div className="max-w-4xl w-full relative animate-in zoom-in-95 duration-200">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setSelectedDesign(null)}
                  className="absolute -top-12 right-0 bg-card hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </Button>
                <img
                  src={selectedDesign}
                  alt="Selected design"
                  className="w-full rounded-2xl shadow-2xl border border-border"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
