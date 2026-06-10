import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProfileCards from './components/ProfileCards.jsx';
import ExpertiseDashboard from './components/ExpertiseDashboard.jsx';
import CurriculumRoadmap from './components/CurriculumRoadmap.jsx';
import Projects from './components/Projects.jsx';
import Metrics from './components/Metrics.jsx';
import Philosophy from './components/Philosophy.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const SectionIntro = ({ id, kicker, title, description }) => (
  <div id={id} className="section-shell mb-10 scroll-mt-28">
    <span className="section-kicker">{kicker}</span>
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <h2 className="section-title">{title}</h2>
      {description ? <p className="text-base leading-8 text-slate-300">{description}</p> : null}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <section className="py-16 sm:py-20">
          <SectionIntro
            id="about"
            kicker="Profile Matrix"
            title="AI 교육 혁신을 설계하는 핵심 역할"
            description="학위과정 교과편성, 생성형 AI 활용 교육, 데이터 기반 교육행정, 산업현장 연계 프로젝트를 하나의 교육 경험으로 연결합니다."
          />
          <ProfileCards />
        </section>
        <section className="py-16 sm:py-20">
          <SectionIntro
            id="expertise"
            kicker="Expertise Dashboard"
            title="전문분야를 데이터 시각화로 한눈에"
            description="교육과정 개발, 데이터 리터러시, 업무 자동화, 스마트 제조 교육까지 AI 기반 직업교육에 필요한 역량을 대시보드 형태로 정리했습니다."
          />
          <ExpertiseDashboard />
        </section>
        <section className="py-16 sm:py-20">
          <SectionIntro
            id="curriculum"
            kicker="Curriculum Roadmap"
            title="AI 리터러시에서 산업현장 프로젝트까지"
            description="기초 이해에서 생성형 AI 활용, 데이터 분석, 자동화, 현장 프로젝트로 이어지는 단계형 교육과정 흐름입니다."
          />
          <CurriculumRoadmap />
        </section>
        <section className="py-16 sm:py-20">
          <SectionIntro
            id="projects"
            kicker="Project & Research"
            title="교육과 기술을 연결하는 프로젝트"
            description="AI 교육 혁신, 위치추적 기술, 스마트 제조 시뮬레이션을 중심으로 실무형 교육 콘텐츠를 확장합니다."
          />
          <Projects />
        </section>
        <section id="metrics" className="scroll-mt-28 py-16 sm:py-20">
          <Metrics />
        </section>
        <section className="py-16 sm:py-20">
          <Philosophy />
        </section>
        <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
