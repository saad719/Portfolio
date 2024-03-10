import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className= 'w-screen h-screen relative'>
      <div className= 'flex items-center w-full h-full bg-cover bg-center' style= {{backgroundImage: "url(/main-bg.webp"}}>
        <div className="pl-29 md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Learning 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            I am building this as my first nextjs project 
          </p>
          <div className="flex-col md:flex-row hidden gap-10">
            <Link href="/my-skills" className= 'rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn more
            </Link>
            <Link href="/my-projects" className= 'rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-0 group-hver:opacity-20"/>
              My Projects
            </Link>
            <Link href="/contact-me" className= 'rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className="absolute rounded-[20px] z-[1] bg-white insert-0 opacity-0 group-hver:opacity-20"/>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 z-[20] right-5 flex-col md:flex-row gap-5">
            <Link href="/my-skills" className= 'rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn more
            </Link>
            <Link href="/my-projects" className= 'rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              
              My Projects
            </Link>
            <Link href="/contact-me" className= 'rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              
              Contact Me
            </Link>
          </div>
          <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
          />
          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      Home
    </main>
  )
}
