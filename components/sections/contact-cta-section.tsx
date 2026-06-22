"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteData } from "@/data/site-data";
import Image from "next/image";

export function ContactCtaSection() {
  const { contacts, thankYou } = siteData;
  const [showWechatQR, setShowWechatQR] = useState(false);
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement>(null);
  const portfolioMenuRef = useRef<HTMLDivElement>(null);
  const contactItems = [contacts.wechat, contacts.email];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeMenuRef.current && !resumeMenuRef.current.contains(e.target as Node)) {
        setShowResumeMenu(false);
      }
      if (portfolioMenuRef.current && !portfolioMenuRef.current.contains(e.target as Node)) {
        setShowPortfolioMenu(false);
      }
    };
    if (showResumeMenu || showPortfolioMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResumeMenu, showPortfolioMenu]);

  return (
    <section className="bg-[var(--background)]">
      <div id="contact-cta" className="contact-cta-scroll-anchor"></div>
      <Container className="section-stage py-24 sm:py-32">
        <Reveal>
          <div className="paper-page rounded-[2.4rem] border border-[var(--border-strong)] p-8 sm:p-10">
            <div className="grid gap-12 lg:grid-cols-[52%_40%] lg:gap-20 items-center">
              <div className="max-w-[620px] space-y-5">
                <div className="space-y-3">
                  <p className="hand-note text-xl text-[var(--accent)]">{thankYou.eyebrow}</p>
                  <h2 className="scribble-accent text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                    {thankYou.title}
                  </h2>
                  <div className="space-y-1 text-[34px] font-semibold tracking-tight text-[var(--foreground)] leading-[1.45] sm:text-[38px]">
                    <p>我叫黄瀚晖，</p>
                    <p className="text-[#7da4de]">「要永远保持滚烫的生命力」</p>
                    <p>愿你也愿我。</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]">
                    {contacts.title}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {contactItems.map((item) => {
                      const isWechat = item.label === "微信";
                      const content = (
                        <div
                          className={`rounded-xl border border-[var(--border)] px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5 ${isWechat ? 'cursor-pointer' : ''}`}
                          onClick={isWechat ? () => setShowWechatQR(true) : undefined}
                        >
                          <p className="text-xs text-[var(--muted-foreground)]">{item.label}</p>
                          <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                            {item.value}
                          </p>
                        </div>
                      );

                      return item.href ? (
                        <a key={item.label} href={item.href} className="block">
                          {content}
                        </a>
                      ) : (
                        <div key={item.label}>{content}</div>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    <div className="relative" ref={resumeMenuRef}>
                      <button
                        onClick={() => setShowResumeMenu(!showResumeMenu)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-white hover:bg-[#5b7393] transition-all duration-200 w-[140px] h-11"
                        style={{ padding: '0 18px', lineHeight: '1' }}
                      >
                        <svg className="w-3.5 h-3.5 inline-flex items-center flex-shrink-0" fill="none" stroke="white" viewBox="0 0 24 24" style={{ lineHeight: '1' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="text-xs font-medium inline-flex items-center" style={{ lineHeight: '1' }}>简历</span>
                      </button>
                      {showResumeMenu && (
                        <div className="absolute top-full mt-2 left-0 w-36 bg-white rounded-xl shadow-lg border border-[var(--border)] py-1 z-50">
                          <button
                            onClick={() => {
                              window.open('/files/黄瀚晖-简历-内容运营.pdf', '_blank');
                              setShowResumeMenu(false);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
                          >
                            预览简历
                          </button>
                          <button
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = '/files/黄瀚晖-简历-内容运营.pdf';
                              link.download = '黄瀚晖-简历-内容运营.pdf';
                              link.click();
                              setShowResumeMenu(false);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
                          >
                            下载简历
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="relative" ref={portfolioMenuRef}>
                      <button
                        onClick={() => setShowPortfolioMenu(!showPortfolioMenu)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)] text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-all duration-200 w-[140px] h-11"
                        style={{ padding: '0 18px', lineHeight: '1' }}
                      >
                        <svg className="w-3.5 h-3.5 inline-flex items-center flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ lineHeight: '1' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="text-xs font-medium inline-flex items-center" style={{ lineHeight: '1' }}>作品集</span>
                      </button>
                      {showPortfolioMenu && (
                        <div className="absolute top-full mt-2 left-0 w-36 bg-white rounded-xl shadow-lg border border-[var(--border)] py-1 z-50">
                          <button
                            onClick={() => {
                              window.open('/files/黄瀚晖-作品集-内容运营.pdf', '_blank');
                              setShowPortfolioMenu(false);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
                          >
                            预览作品集
                          </button>
                          <button
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = '/files/黄瀚晖-作品集-内容运营.pdf';
                              link.download = '黄瀚晖-作品集-内容运营.pdf';
                              link.click();
                              setShowPortfolioMenu(false);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
                          >
                            下载作品集
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <figure className="lg:justify-self-end max-w-[420px]">
                <div className="collage-frame overflow-hidden rounded-xl border border-[rgba(36,49,63,0.08)] bg-[linear-gradient(180deg,rgba(253,254,255,0.94),rgba(241,245,250,0.9))] p-3">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={thankYou.visual.src}
                      alt={thankYou.visual.alt}
                      width={1200}
                      height={1600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </Reveal>
      </Container>

      {showWechatQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowWechatQR(false)}
        >
          <div
            className="rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/placeholders/二维码.jpg"
              alt="微信二维码"
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}