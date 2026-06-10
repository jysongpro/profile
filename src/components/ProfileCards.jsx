import { motion } from 'framer-motion';
import { BrainCircuit, Factory, GraduationCap, WandSparkles } from 'lucide-react';

const cards = [
  {
    icon: BrainCircuit,
    title: 'AI 교육과정 개발',
    text: 'AI활용기초, 생성형 AI, AI와 윤리를 직업교육 맥락에 맞게 설계합니다.',
    color: 'text-cyanGlow',
  },
  {
    icon: GraduationCap,
    title: '학위과정 교과편성',
    text: '공통교과와 융합교과를 연결해 학위과정의 교육 흐름을 체계화합니다.',
    color: 'text-goldGlow',
  },
  {
    icon: WandSparkles,
    title: '생성형 AI 활용',
    text: '프롬프트 엔지니어링과 AI 도구를 수업, 행정, 연구 생산성에 적용합니다.',
    color: 'text-hotPink',
  },
  {
    icon: Factory,
    title: '산업현장 연계 교육',
    text: '스마트 제조와 반도체 교육을 실무 프로젝트형 콘텐츠로 연결합니다.',
    color: 'text-violetGlow',
  },
];

export default function ProfileCards() {
  return (
    <div className="section-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ icon: Icon, title, text, color }, index) => (
        <motion.article
          key={title}
          className="glass-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/50 hover:shadow-neon"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <div className="mb-5 grid size-12 place-items-center rounded-lg border border-white/10 bg-white/8">
            <Icon className={`size-6 ${color}`} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-black text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
        </motion.article>
      ))}
    </div>
  );
}
