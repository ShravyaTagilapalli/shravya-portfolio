export default function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-floatSlow" />
      <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float" />
      <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-highlight/20 blur-3xl animate-floatSlow" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-secondary/30 blur-3xl animate-float" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 rounded-2xl rotate-12 border border-primary/20 bg-primary/5 backdrop-blur-sm animate-floatSlow" />
    </div>
  );
}
