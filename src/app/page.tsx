import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fff] overflow-hidden px-6 pb-10">
      <header className="w-full flex items-center justify-between pt-0">
        <h1 className="text-8xl font-extrabold text-[#0000FF]">MATET</h1>
        <Image
          src="/flormasgruesaazul.png"
          alt="Flor"
          width={160}
          height={160}
          className="w-40 h-40 mt-6"
        />
      </header>
      <footer>
        <Link
          href="https://www.instagram.com/comisionmatet2026/"
          className="block border-t border-gray-300 pt-2 mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#0000FF]">Instagram</h2>
              <p className="text-xs text-gray-600 pt-2">
                Siguenos en instagram para no perderte nada!<br />
              </p>
            </div>
            <div className="h-16 w-16 rounded-full border border-[#0000FF] flex items-center justify-center text-[#0000FF]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" strokeWidth="2" />
                <polyline
                  points="6,3 21,3 21,18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </Link>

        <Link
          href="https://whatsapp.com/channel/0029VbB8ZPv4o7qTNBBDME3H"
          className="block border-t border-gray-300 pt-2 mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-bold text-[#0000FF]">WhatsApp</h2>
              <p className="text-xs text-gray-600 pt-2">
                Entra a nuestro canal para enterarte de todas las novedades<br />
              </p>
            </div>
            <div className="h-16 w-16 rounded-full border border-[#0000FF] flex items-center justify-center text-[#0000FF]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" strokeWidth="2" />
                <polyline
                  points="6,3 21,3 21,18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </Link>

        <Link
          href="https://fiestasmatet.vercel.app/"
          className="block border-t border-gray-300 pt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-bold text-[#0000FF]">Web</h2>
              <p className="text-xs text-gray-600 pt-2">
                Siguenos en instagram para no perderte nada!<br />
              </p>
            </div>
            <div className="h-16 w-16 rounded-full border border-[#0000FF] flex items-center justify-center text-[#0000FF]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" strokeWidth="2" />
                <polyline
                  points="6,3 21,3 21,18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </Link>
      </footer>
    </div>
  );
}