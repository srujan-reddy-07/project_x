export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center text-center px-4">
      <div className="space-y-6">
        <h1 className="text-8xl font-bold" style={{background:"linear-gradient(135deg,#9b7ef8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>404</h1>
        <p className="text-xl text-white/60">Page not found</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition-all">
          Go Home
        </a>
      </div>
    </div>
  );
}
