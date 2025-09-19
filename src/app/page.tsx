export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-sm mb-8 text-black">
        <h1 className="text-sm font-medium">Comision de fiestas de Matet 25/26</h1>
      </header>

      {/* Logo / Illustration */}
      <div className="mb-10">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white text-4xl">
          ⌘
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button className="flex justify-between items-center bg-black text-white py-3 px-4 rounded-full">
          <span className="flex items-center gap-2">❗ Stupebrett</span>
          <span className="text-orange-500 font-bold">✕</span>
        </button>
        <button className="flex justify-between items-center bg-black text-white py-3 px-4 rounded-full">
          <span className="flex items-center gap-2">🧗 Klatretårn</span>
          <span className="text-orange-500 font-bold">✕</span>
        </button>
        <button className="flex justify-between items-center bg-black text-white py-3 px-4 rounded-full">
          <span className="flex items-center gap-2">👨‍🍳 Kokkkekurs</span>
          <span className="text-orange-500 font-bold">✕</span>
        </button>
      </div>

      {/* Footer Button */}
      <div className="mt-10 w-full max-w-sm">
        <button className="bg-orange-400 text-black font-medium py-3 w-full rounded-full">
          Neste →
        </button>
      </div>
    </div>
  );
}