export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col p-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
        <span className="text-xs tracking-wider uppercase">
          Del pueblo, para el pueblo
        </span>
      </header>

      {/* Logo / Title */}
      <h1 className="text-6xl font-extrabold mb-2">MATET</h1>

      {/* Date */}
      <p className="text-sm text-gray-600 mb-4">2025/2026</p>

      {/* Article */}
      <h2 className="text-2xl font-semibold leading-snug mb-2">
        ¡Echa un vistazo a todos nuestros links y no te pierdas nada!
      </h2>
      <p className="text-gray-700 text-base">
        ¡Siguenos en instagram!
      </p>
    </div>
  );
}