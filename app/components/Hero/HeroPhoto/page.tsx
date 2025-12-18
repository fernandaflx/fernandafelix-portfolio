// import Image from "next/image";

// export default function HeroPhoto() {
//   return (
//     <div className="order-1 md:order-2 flex justify-center md:justify-end relative group perspective-1000">
//       <div className="absolute inset-0 bg-linear-to-tr from-accent-primary to-accent-secondary rounded-4xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
//       <div className="relative w-4/5 sm:w-full sm:max-w-md aspect-4/5 rounded-4xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-[1.02]">
//         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
//         <Image
//           src="/profile-photo.jpg"
//           alt="Foto de Fernanda Felix"
//           width={800}
//           height={1000}
//           className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
//         />
//       </div>
//     </div>
//   )
// }

import Image from "next/image";
import HeroBadge from "../HeroBadge/page";
import HeroTitle from "../HeroTitle/page";

export default function HeroPhoto() {
  return (
    <div className="order-1 md:order-2 flex justify-center md:justify-end relative group perspective-1000">
      <div className="absolute inset-0 bg-linear-to-tr from-accent-primary to-accent-secondary rounded-4xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
      <div className="relative w-4/5 sm:w-full sm:max-w-md aspect-4/5 rounded-4xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-[1.02]">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 block md:hidden">
          <div className="absolute bottom-4 left-4">
            <HeroTitle />
          </div>
        </div>

        <Image
          src="/profile-photo.jpg"
          alt="Foto de Fernanda Felix"
          width={800}
          height={1000}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  );
}
