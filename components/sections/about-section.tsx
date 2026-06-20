import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteData } from "@/data/site-data";

const tags = ["AIGC影像", "效果评估", "Case分析", "数据质检"];

export function AboutSection() {
  const { about } = siteData;

  return (
    <>
    <section className="bg-transparent" style={{ paddingBottom: '160px' }}>
      <div id="about-section" className="about-scroll-anchor"></div>
      <div className="section-stage pt-24 pb-16 sm:pt-32 sm:pb-20">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center mt-[130px]">
            <div className="paper-page relative w-full max-w-[720px] overflow-hidden rounded-[2.4rem] border border-[var(--border-strong)] px-7 py-10 sm:px-9 sm:py-14">
              <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-[rgba(207,216,223,0.3)] blur-2xl" />
              <div className="absolute bottom-10 left-8 h-16 w-28 rounded-full bg-[rgba(82,106,138,0.06)] blur-2xl" />
              <div className="relative flex flex-col justify-center space-y-4">
                <p className="hand-note text-base text-[var(--accent)]">
                  {about.eyebrow}
                </p>
                <h2 className="scribble-accent max-w-4xl text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2.1rem] sm:leading-[1.2]">
                  黄瀚晖
                </h2>
                <p className="text-sm text-[var(--muted-foreground)]">
                  2026届｜广告学｜AIGC影像与内容运营方向
                </p>
                <div className="space-y-3">
                  <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                    我有摄影、广告策划、新媒体运营和 AI 影像效果设计的复合背景，曾操盘自媒体账号实现从 0 到 1 的内容冷启动，并深度参与 AI 写真、一键出片等影像项目。
                  </p>
                  <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                    在 AI 影像领域，我致力于将主观审美拆解为具体的评估标准。通过严谨的 Case 分类与数据质检，将视觉误差转化为可复盘的算法优化反馈。
                  </p>
                  <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                    在内容运营层面，我高度关注内容方案在真实场景中的稳定性和可用性。确保视觉表达既符合用户预期，又能通过清晰的定位和数据复盘实现业务落地。
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <figure>
                <div className="collage-frame overflow-hidden rounded-[1.6rem] border border-[rgba(36,49,63,0.08)] bg-[linear-gradient(180deg,rgba(253,254,255,0.94),rgba(241,245,250,0.9))] p-3 shadow-[0_6px_18px_rgba(67,83,106,0.04)]" style={{ maxWidth: '300px', maxHeight: '480px' }}>
                  <div className="overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={about.visual.src}
                      alt={about.visual.alt}
                      width={300}
                      height={480}
                      className="w-full object-cover"
                      style={{ maxWidth: '300px', maxHeight: '480px' }}
                    />
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </Container>
      </div>
    </section>
    </>
  );
}