import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Upload, LogOut, History, Sparkles, ImageIcon, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Sample design images (using existing assets)
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
    
    // Simulate API call with timeout
    setTimeout(() => {
      setGeneratedDesigns(sampleDesigns);
      setIsGenerating(false);
      
      // Save to project history
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
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Neighborbrite</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              History ({projectHistory.length})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2 text-muted-foreground hover:text-destructive"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Transform Your Yard
            </h1>
            <p className="text-muted-foreground text-lg">
              Upload an image of your yard and get 4 AI-powered design variations
            </p>
          </div>

          {/* Project History Sidebar */}
          {showHistory && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex justify-end">
              <div className="w-full max-w-md bg-card border-l border-border h-full overflow-y-auto p-6 animate-in slide-in-from-right">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Project History</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowHistory(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                {projectHistory.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No projects yet</p>
                    <p className="text-sm">Upload an image to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projectHistory.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => loadProjectFromHistory(project)}
                        className="group cursor-pointer p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
                      >
                        <div className="flex gap-4">
                          <img
                            src={project.originalImage}
                            alt={project.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {project.createdAt.toLocaleDateString()}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {project.designs.length} designs
                            </p>
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
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Area */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Upload Your Yard Image
                </h2>
                
                {uploadedImage ? (
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded yard"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleClearUpload}
                      className="absolute top-2 right-2"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-all">
                    <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
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
              <div className="flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-primary" />
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
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Your Design Variations
              </h2>
              
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
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-foreground font-medium">
                        Design {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design Preview Modal */}
          {selectedDesign && (
            <div
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedDesign(null)}
            >
              <div className="max-w-4xl w-full relative">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setSelectedDesign(null)}
                  className="absolute -top-12 right-0"
                >
                  <X className="w-5 h-5" />
                </Button>
                <img
                  src={selectedDesign}
                  alt="Selected design"
                  className="w-full rounded-2xl shadow-2xl"
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
