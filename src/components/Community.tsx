const stats = [
  { value: "500K+", label: "registered users" },
  { value: "15M+", label: "designs generated" },
  { value: "170+", label: "countries" },
];

export const Community = () => {
  return (
    <section id="community" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          Join a thriving community
        </h2>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-accent/50 rounded-3xl py-12 px-8 text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dream Garden Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your dream garden in 2 minutes
          </h3>
          <p className="text-muted-foreground text-lg">
            Discover how easy it is to transform your yard with Neighborbrite.
          </p>
        </div>
      </div>
    </section>
  );
};
