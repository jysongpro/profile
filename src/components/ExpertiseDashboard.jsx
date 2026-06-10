import { BookOpenCheck, DatabaseZap, FileSpreadsheet, Network, Workflow } from 'lucide-react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const chartData = [
  { subject: 'AI 교육', score: 95 },
  { subject: '교과편성', score: 92 },
  { subject: '데이터', score: 88 },
  { subject: '자동화', score: 85 },
  { subject: '스마트제조', score: 82 },
  { subject: 'DX 기획', score: 90 },
];

const rows = [
  ['AI 교육과정 개발', 'AI활용기초, 생성형 AI, AI와 윤리', '교과목 개발'],
  ['교과과정 편성', '학위과정, 공통교과, 융합교과', '교육과정 기획'],
  ['데이터 분석', 'Excel, Python, 데이터 시각화', '교육행정·통계'],
  ['업무 자동화', '클라우드, AI 도구, 프롬프트', '생산성 향상'],
  ['스마트 제조', '반도체 장비, 시뮬레이터', '산업현장 교육'],
];

const chips = [
  { icon: BookOpenCheck, label: 'Curriculum Innovation' },
  { icon: DatabaseZap, label: 'Data Literacy' },
  { icon: Workflow, label: 'Cloud Automation' },
  { icon: Network, label: 'Industrial AI' },
];

export default function ExpertiseDashboard() {
  return (
    <div className="section-shell grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <article className="glass-card rounded-lg p-5 sm:p-7">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase text-cyanGlow">Skill Radar</p>
            <h3 className="mt-1 text-2xl font-black text-white">AI 교육 역량 분포</h3>
          </div>
          <FileSpreadsheet className="size-8 text-goldGlow" aria-hidden="true" />
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <PolarGrid stroke="rgba(148, 163, 184, 0.25)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#CBD5E1', fontSize: 12, fontWeight: 700 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="역량"
                dataKey="score"
                stroke="#22D3EE"
                fill="#8B5CF6"
                fillOpacity={0.45}
                strokeWidth={3}
              />
              <Tooltip
                contentStyle={{
                  background: '#0B1026',
                  border: '1px solid rgba(34,211,238,0.35)',
                  borderRadius: 8,
                  color: '#fff',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {chips.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
              <Icon className="size-5 text-cyanGlow" aria-hidden="true" />
              <span className="text-sm font-bold text-slate-200">{label}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="glass-card overflow-hidden rounded-lg">
        <div className="border-b border-white/10 p-5 sm:p-7">
          <p className="text-sm font-black uppercase text-goldGlow">Expertise Table</p>
          <h3 className="mt-1 text-2xl font-black text-white">전문분야 매핑</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-sm text-cyanGlow">
                <th className="px-5 py-4 font-black">분야</th>
                <th className="px-5 py-4 font-black">주요 내용</th>
                <th className="px-5 py-4 font-black">활용 영역</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([field, content, use]) => (
                <tr key={field} className="border-b border-white/10 text-sm transition hover:bg-cyanGlow/8">
                  <td className="px-5 py-5 font-black text-white">{field}</td>
                  <td className="px-5 py-5 text-slate-300">{content}</td>
                  <td className="px-5 py-5">
                    <span className="rounded-full border border-violetGlow/35 bg-violetGlow/10 px-3 py-1 font-bold text-violet-100">
                      {use}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
