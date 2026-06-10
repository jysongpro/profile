import { Download, Mail, MapPin, MessageSquare, Tags } from 'lucide-react';

const interests = ['AI', '생성형 AI', '데이터 분석', '업무 자동화', '디지털 전환', '스마트 제조'];

export default function Contact() {
  return (
    <div className="section-shell">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">AI 교육과정 개발과 강의 협업을 연결합니다</h2>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            생성형 AI 활용 교육, 교과과정 개발, 데이터 기반 교육행정, 산업현장 연계 프로젝트에 대한 강의와 자문을
            함께 논의할 수 있습니다.
          </p>
        </div>

        <article className="glass-card rounded-lg p-6 sm:p-8">
          <dl className="space-y-5">
            <div className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-cyanGlow" aria-hidden="true" />
              <div>
                <dt className="text-sm font-black text-slate-400">이메일</dt>
                <dd className="text-lg font-black text-white">jysongpro@gmail.com</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-goldGlow" aria-hidden="true" />
              <div>
                <dt className="text-sm font-black text-slate-400">소속</dt>
                <dd className="text-lg font-black text-white">한국폴리텍대학 AI혁신부</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Tags className="mt-1 size-5 shrink-0 text-hotPink" aria-hidden="true" />
              <div>
                <dt className="text-sm font-black text-slate-400">관심 분야</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span key={interest} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-sm font-bold text-slate-200">
                      {interest}
                    </span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a href="mailto:jysongpro@gmail.com" className="neon-button-primary">
              <Mail className="size-4" aria-hidden="true" />
              이메일 보내기
            </a>
            <button className="neon-button-ghost" type="button" aria-label="프로필 PDF 다운로드">
              <Download className="size-4" aria-hidden="true" />
              프로필 PDF 다운로드
            </button>
            <a href="mailto:jysongpro@gmail.com?subject=AI%20교육%20상담%20요청" className="neon-button-ghost">
              <MessageSquare className="size-4" aria-hidden="true" />
              상담 요청하기
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
