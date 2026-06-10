import { Cpu, Database, Layers, Rocket, Sparkles } from 'lucide-react';

const steps = [
  { icon: Sparkles, phase: '1단계', title: 'AI 리터러시', text: 'AI 개념, 활용 윤리, 디지털 전환 기본 이해' },
  { icon: Cpu, phase: '2단계', title: '생성형 AI 활용', text: '프롬프트 설계, 수업 자료 제작, 업무 보조' },
  { icon: Database, phase: '3단계', title: '데이터 분석과 시각화', text: 'Excel, Python, 통계적 사고, 대시보드' },
  { icon: Layers, phase: '4단계', title: '클라우드 기반 업무 자동화', text: 'AI 도구 연결, 반복 업무 자동화, 협업 워크플로' },
  { icon: Rocket, phase: '5단계', title: '산업현장 AI 프로젝트', text: '스마트 제조, 반도체 장비, 현장 문제 해결' },
];

export default function CurriculumRoadmap() {
  return (
    <div className="section-shell">
      <div className="relative grid gap-5 lg:grid-cols-5">
        <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-cyanGlow via-violetGlow to-goldGlow lg:block" />
        {steps.map(({ icon: Icon, phase, title, text }) => (
          <article key={title} className="glass-card relative rounded-lg p-5 transition hover:-translate-y-1 hover:border-goldGlow/50">
            <div className="mb-5 grid size-14 place-items-center rounded-lg border border-cyanGlow/30 bg-navy shadow-neon">
              <Icon className="size-7 text-cyanGlow" aria-hidden="true" />
            </div>
            <p className="text-sm font-black text-goldGlow">{phase}</p>
            <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
