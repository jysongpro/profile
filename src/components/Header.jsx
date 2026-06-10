import { useState } from 'react';
import { Bot, Download, Menu, MessageCircle, X } from 'lucide-react';

const navItems = [
  ['소개', '#about'],
  ['전문분야', '#expertise'],
  ['교육과정', '#curriculum'],
  ['프로젝트', '#projects'],
  ['역량지표', '#metrics'],
  ['연락처', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/82 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="주요 메뉴">
        <a href="#" className="flex items-center gap-3" aria-label="송지영 Professor 홈">
          <span className="grid size-11 place-items-center rounded-lg bg-gradient-to-br from-cyanGlow via-royal to-violetGlow shadow-neon">
            <Bot className="size-6" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-black text-white">송지영 Professor</span>
            <span className="block text-xs font-semibold text-cyanGlow">AI Innovation Lab</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-bold text-slate-200 transition hover:text-cyanGlow">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="mailto:jysongpro@gmail.com" className="neon-button-primary" aria-label="AI 교육 상담 이메일 보내기">
            <MessageCircle className="size-4" aria-hidden="true" />
            AI 교육 상담
          </a>
          <button className="neon-button-ghost" type="button" aria-label="프로필 다운로드">
            <Download className="size-4" aria-hidden="true" />
            프로필 다운로드
          </button>
        </div>

        <button
          className="grid size-11 place-items-center rounded-lg border border-white/15 bg-white/5 lg:hidden"
          type="button"
          aria-label={open ? '모바일 메뉴 닫기' : '모바일 메뉴 열기'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-6 pt-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-100 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a href="mailto:jysongpro@gmail.com" className="neon-button-primary">
                <MessageCircle className="size-4" aria-hidden="true" />
                AI 교육 상담
              </a>
              <button className="neon-button-ghost" type="button" aria-label="프로필 다운로드">
                <Download className="size-4" aria-hidden="true" />
                프로필 다운로드
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
