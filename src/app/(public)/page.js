import Image from 'next/image'
import foto from './foto_hbban.jpg'

export default function Home() {
  return (
    <>
      <div className="flex justify-center mb-20">
        <div className="w-1/2">
          <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">Hi,</h1>
          <h1 className="text-6xl font-sans md:Apple Color Emoji text-blue-600/100">I am Hibban Hafizh</h1>
          <div>
            <h1 className="text-6xl font-sans md:Apple Color Emoji">Web Developer</h1>
            <button 
              className="mt-4 rounded-lg bg-blue-500 w-48 min-h-12 text-white hover:bg-blue-700 transition duration-300 ease-in-out"
            >Get Started</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src={foto}
            alt="Foto Profil"
            width={200}
            className="mt-10 rounded-full shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}