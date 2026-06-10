import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Mail, Sparkles, Target, TrendingUp } from 'lucide-react';

const skills = [
  ['AI Education', 95],
  ['Curriculum Design', 92],
  ['Data Literacy', 88],
  ['Automation', 85],
];

const bars = [72, 48, 58, 83, 64, 91, 54, 76];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28">
      <div className="section-shell grid min-h-[calc(100vh-7rem)] gap-10 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/40 bg-cyanGlow/10 px-4 py-2 text-sm font-extrabold text-cyanGlow shadow-neon">
            <Sparkles className="size-4" aria-hidden="true" />
            AI Innovation Professor
          </span>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            AI와 교육을 연결하는
            <span className="block bg-gradient-to-r from-cyanGlow via-royal to-goldGlow bg-clip-text text-transparent">
              디지털 교육혁신 전문가
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-300">
            한국폴리텍대학 AI혁신부에서 학위과정 교과과정 편성과 AI 기반 교육과정 개발을 수행하며,
            산업 현장 중심의 미래형 직업교육을 설계합니다.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#expertise" className="neon-button-primary">
              전문분야 보기
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="neon-button-ghost">
              강의/자문 문의
            </a>
            <a href="mailto:jysongpro@gmail.com" className="neon-button-ghost">
              <Mail className="size-4" aria-hidden="true" />
              이메일 보내기
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['4+', '교육혁신 분야'],
              ['10+', 'AI 교과목 아이디어'],
              ['5+', '프로젝트 영역'],
              ['90%+', '실무 중심 설계'],
            ].map(([value, label]) => (
              <div key={label} className="glass-card rounded-lg p-4">
                <dt className="text-2xl font-black text-cyanGlow">{value}</dt>
                <dd className="mt-1 text-xs font-bold text-slate-300">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute -right-8 -top-8 size-44 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 blur-sm" />
          <div className="glass-card relative rounded-lg p-5 shadow-violet sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-hotPink" />
                <span className="size-3 rounded-full bg-goldGlow" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-sm font-bold text-slate-400">AI Lab / Digital Education</span>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.82fr_1fr]">
              <div className="relative overflow-hidden rounded-lg border border-cyanGlow/25 bg-slate-950">
                <img
                  src="/assets/profile.jpg"
                  alt="송지영 교수 프로필 사진"
                  className="h-full min-h-80 w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-4">
                  <p className="text-xs font-bold uppercase text-cyanGlow">Professor Portfolio</p>
                  <p className="text-2xl font-black text-white">송지영</p>
                  <p className="text-sm text-slate-300">한국폴리텍대학 AI혁신부</p>
                </div>
              </div>

              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {['Professor', 'AI Curriculum', 'GenAI', 'DX'].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  {skills.map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-bold text-slate-200">{label}</span>
                        <span className="font-black text-cyanGlow">{value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyanGlow via-royal to-violetGlow"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-lg border border-white/10 bg-black/20 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-black text-white">
                      <BarChart3 className="size-4 text-cyanGlow" aria-hidden="true" />
                      교육 설계 인사이트
                    </span>
                    <TrendingUp className="size-5 text-goldGlow" aria-hidden="true" />
                  </div>
                  <div className="flex h-24 items-end gap-3">
                    {bars.map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t bg-gradient-to-t from-violetGlow to-cyanGlow"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {['기획', '개발', '적용'].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Target className="mb-3 size-5 text-goldGlow" aria-hidden="true" />
                  <p className="text-2xl font-black text-white">0{index + 1}</p>
                  <p className="text-sm font-bold text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
