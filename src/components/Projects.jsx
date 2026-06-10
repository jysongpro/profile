import { Activity, Cpu, MapPin } from 'lucide-react';

const projects = [
  {
    icon: Activity,
    title: 'AI 기반 교육 혁신',
    text: '교수학습, 행정, 연구 지원 과정에 생성형 AI를 적용하는 교육 혁신 모델을 설계합니다.',
    tags: ['GenAI', 'Prompt', 'Education DX'],
    status: '확장 중',
  },
  {
    icon: MapPin,
    title: 'AI 센서를 이용한 실시간 실내 위치추적',
    text: '센서 데이터와 AI 분석을 활용해 실내 위치 추적 및 실시간 모니터링 가능성을 탐구합니다.',
    tags: ['Sensor', 'Tracking', 'AI Data'],
    status: '연구 관심',
  },
  {
    icon: Cpu,
    title: '스마트 제조·반도체 장비 시뮬레이션',
    text: '산업현장 장비 이해를 돕는 시뮬레이터 기반 실무형 교육 콘텐츠를 구상합니다.',
    tags: ['Smart Factory', 'Semiconductor', 'Simulator'],
    status: '기획 중',
  },
];

export default function Projects() {
  return (
    <div className="section-shell grid gap-5 lg:grid-cols-3">
      {projects.map(({ icon: Icon, title, text, tags, status }) => (
        <article key={title} className="glass-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-violet">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-white/8">
              <Icon className="size-6 text-cyanGlow" aria-hidden="true" />
            </div>
            <span className="rounded-full bg-goldGlow px-3 py-1 text-xs font-black text-slate-950">{status}</span>
          </div>
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="mt-4 min-h-24 text-sm leading-7 text-slate-300">{text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-bold text-cyan-100">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
