import { motion } from 'framer-motion';
import { Gauge, Lightbulb, Network, ShieldCheck } from 'lucide-react';

const metrics = [
  { icon: Network, value: '4+', label: '교육혁신 분야', text: 'AI, 데이터, DX, 산업연계' },
  { icon: Lightbulb, value: '10+', label: 'AI 활용 교과목 아이디어', text: '기초부터 프로젝트까지' },
  { icon: ShieldCheck, value: '5+', label: '핵심 연구/프로젝트 영역', text: '센서, 제조, 자동화, 분석' },
  { icon: Gauge, value: '90%+', label: '실무 중심 교육 설계 지향', text: '현장 적용 가능한 학습 경험' },
];

export default function Metrics() {
  return (
    <div className="section-shell">
      <div className="glass-card rounded-lg p-5 sm:p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <span className="section-kicker">Visual Metrics</span>
            <h2 className="section-title">도시형 대시보드 지표</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            교육과정 기획, AI 활용, 데이터 분석, 산업 현장 이해를 정량적 카드로 요약했습니다.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ icon: Icon, value, label, text }, index) => (
            <motion.article
              key={label}
              className="rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Icon className="mb-6 size-7 text-cyanGlow" aria-hidden="true" />
              <p className="text-5xl font-black text-white">{value}</p>
              <h3 className="mt-4 text-lg font-black text-goldGlow">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
