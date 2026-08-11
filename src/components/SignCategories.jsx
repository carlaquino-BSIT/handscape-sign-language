import Link from "next/link";
import { signCategories } from "@/data/signs";

const categoryRoutes = {
  alphabet: "/signs/alphabet",
  numbers: "/signs/numbers",
  words: "/signs/words",
  phrases: "/signs/phrases",
};

export default function SignCategories() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {signCategories.map((category, index) => (
        <Link
          key={category.id}
          href={categoryRoutes[category.id]}
          className="group relative border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
        >
          {/* Number */}
          <span className="absolute right-4 top-4 font-mono text-[9px] text-neutral-300">
            0{index + 1}
          </span>

          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center border border-neutral-200 text-neutral-700 transition-colors group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
            <i className={`${category.icon} text-lg`} />
          </div>

          {/* Title */}
          <h3 className="mt-7 text-base font-semibold tracking-tight">
            {category.label}
          </h3>

          {/* Description */}
          <p className="mt-2 min-h-12 text-xs leading-5 text-neutral-500">
            {category.description}
          </p>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
              {category.count} signs
            </span>

            <i className="ri-arrow-right-line text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-950" />
          </div>
        </Link>
      ))}
    </div>
  );
}