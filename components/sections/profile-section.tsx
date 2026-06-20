"use client";

import { Container } from "@/components/ui/container";
import { siteData } from "@/data/site-data";

export function ProfileSection() {
  const { profile } = siteData;

  return (
    <section
      id="profile-section"
      className="relative overflow-hidden bg-[#fbfbf9]"
    >
      {/* Paper texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-stage py-16 sm:py-20">
        <Container>
          {/* Section Title */}
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-medium tracking-wide text-[var(--foreground)]">
              I&apos;m {profile.name.split('').slice(0, 2).join('')}
            </h2>
          </div>

          {/* Main Grid - 3 Columns */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:px-4">

            {/* Left Column - Personal Info & Objectives */}
            <div className="relative space-y-6">
              {/* Personal Info Card */}
              <div
                className="relative rounded-2xl bg-white p-6 shadow-sm"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                <p className="hand-note text-xs text-[#5a7a9a]">Personal Info</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  厦门大学嘉庚学院 · 广告学
                </p>
              </div>

              {/* Objectives Card */}
              <div
                className="relative rounded-2xl bg-white p-6 shadow-sm"
                style={{ transform: 'rotate(0.8deg)' }}
              >
                <p className="hand-note text-xs text-[#5a7a9a]">Objectives</p>
                <h4 className="mt-3 text-sm font-medium text-[var(--foreground)]">
                  我的目标？
                </h4>

                <div className="mt-4 space-y-3">
                  {[
                    '找到合适的岗位，落地真实项目',
                    '持续积累视觉表达与内容判断力',
                    '把 AI 工具真正放进工作流里',
                  ].map((goal, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {/* Decorative arrow */}
                      <div className="mt-1 text-[#5a7a9a]/60">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${i * 5 - 10}deg)` }}>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--muted-foreground)]">{goal}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative corner element */}
                <div
                  className="absolute -bottom-2 -right-2 text-2xl opacity-20"
                  style={{ transform: 'rotate(12deg)' }}
                >
                  ★
                </div>
              </div>

              {/* Decorative element - scattered */}
              <div
                className="absolute -left-4 top-1/2 text-[#5a7a9a]/20"
                style={{ transform: 'rotate(-15deg)' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>

            {/* Right Column - Skills, Hobbies & Radar */}
            <div className="relative space-y-6">
              {/* Skills Card */}
              <div
                className="relative rounded-2xl bg-white p-6 shadow-sm"
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <p className="hand-note text-xs text-[#5a7a9a]">Skills</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['视觉表达', '内容运营', '项目管理', 'AI 应用'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-dashed border-[#5a7a9a]/30 px-3 py-1.5 text-xs text-[var(--muted-foreground)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Adobe colored squares - scattered around */}
                <div className="absolute -right-2 top-1/2 h-4 w-4 rounded-sm bg-[#d4386a]" style={{ transform: 'rotate(15deg)' }} />
                <div className="absolute -right-4 top-1/3 h-3 w-3 rounded-sm bg-[#ff9955]" style={{ transform: 'rotate(-10deg)' }} />
                <div className="absolute right-0 -top-2 h-3.5 w-3.5 rounded-sm bg-[#2a9cba]" style={{ transform: 'rotate(25deg)' }} />
                <div className="absolute -right-1 top-1/4 h-3 w-3 rounded-sm bg-[#1a1a8c]" style={{ transform: 'rotate(-5deg)' }} />
              </div>

              {/* Hobbies Card */}
              <div
                className="relative rounded-2xl bg-white p-6 shadow-sm"
                style={{ transform: 'rotate(-0.8deg)' }}
              >
                <p className="hand-note text-xs text-[#5a7a9a]">Hobbies</p>
                <div className="mt-4 space-y-2">
                  {[
                    { icon: '🎬', label: '影像与照片' },
                    { icon: '📚', label: '阅读与排版' },
                    { icon: '🎨', label: '审美与设计' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span className="text-sm text-[var(--muted-foreground)]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}