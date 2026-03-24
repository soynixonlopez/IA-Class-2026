type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-cyan-700">
        {badge}
      </span>
      <h2 className="mt-5 text-balance text-4xl font-black text-slate-900 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base text-slate-600 md:text-xl">{description}</p>
    </div>
  );
}
