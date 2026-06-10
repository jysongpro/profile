import { Quote, Sparkles } from 'lucide-react';

export default function Philosophy() {
  return (
    <div className="section-shell">
      <article className="glass-card relative overflow-hidden rounded-lg p-8 sm:p-12">
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,211,238,0.34)_1px,transparent_0)] bg-[length:22px_22px]" />
        </div>
        <div className="relative">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-lg bg-cyanGlow/15">
              <Quote className="size-7 text-cyanGlow" aria-hidden="true" />
            </div>
            <span className="text-sm font-black uppercase text-goldGlow">Education Philosophy</span>
          </div>
          <blockquote className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-5xl">
            “기술을 가르치는 것을 넘어, 기술을 활용해 문제를 해결할 수 있는 인재를 양성합니다.”
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-3">
            {['AI', 'Education', 'Curriculum Innovation', 'Digital Transformation'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-bold text-slate-200">
                <Sparkles className="size-4 text-cyanGlow" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
