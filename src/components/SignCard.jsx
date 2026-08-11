"use client";

import Image from "next/image";

export default function SignCard({ sign, onSelect }) {
return (
<button
type="button"
onClick={() => onSelect(sign)}
className="group w-full overflow-hidden border border-neutral-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/40"
>
{/* Sign Image */} <div className="relative aspect-square overflow-hidden bg-[#eeeeeb]">
<Image
src={sign.image}
alt={`FSL sign for ${sign.name}`}
fill
sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
/>

```
    {/* FSL Label */}
    <span className="absolute left-3 top-3 bg-white/80 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-neutral-500 backdrop-blur-sm">
      FSL / {sign.id}
    </span>
  </div>

  {/* Card Footer */}
  <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-4">
    <div>
      <h3 className="font-pixel-square text-lg leading-none text-neutral-950">
        {sign.name}
      </h3>

      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
        Filipino Sign Language
      </p>
    </div>

    {/* Open indicator */}
    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
      <i className="ri-arrow-right-up-line text-xs" />
    </span>
  </div>
</button>

);
}