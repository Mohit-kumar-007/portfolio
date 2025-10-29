const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Welcome to Your App!
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-8">
        This is the perfect starting point to build your amazing React application. Use modern tools
        and frameworks to create something incredible.
      </p>
      <a
        href="/projects"
        className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-accent transition"
      >
        View Projects
      </a>
    </div>
  );
};

export default Index;
