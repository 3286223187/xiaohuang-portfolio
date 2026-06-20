"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function NextSection() {
  return (
    <section id="next-section" className="relative min-h-screen flex items-end" style={{ backgroundImage: 'url(/images/placeholders/背景1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
          <div className="flex flex-col justify-between h-[500px] pt-8">
            <Reveal className="entrance-block entrance-delay-1">
              <div className="info-block-center mt-12">
                <h3 className="text-3xl font-semibold text-[#3383b2] font-serif whitespace-nowrap">
                  黄瀚晖 效果设计师
                </h3>
                <ul className="mt-3 space-y-2 text-base text-[var(--muted-foreground)]">
                  <li>厦门大学嘉庚学院 广告学</li>
                  <li>来自福建莆田</li>
                  <li>热爱影像、关注 AI 内容表达</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100} className="entrance-block entrance-delay-3">
              <div className="info-block-center">
                <h3 className="text-3xl font-semibold text-[#3383b2] font-serif whitespace-nowrap">
                  我关注什么
                </h3>
                <ul className="mt-3 space-y-2 text-base text-[var(--muted-foreground)]">
                  <li>图像效果是否稳定</li>
                  <li>用户体验是否自然</li>
                  <li>问题反馈是否清晰</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="flex items-center">
            <Reveal delay={200}>
              <Image
                src="/images/placeholders/自我介绍2.png"
                alt="自我介绍"
                width={600}
                height={600}
                className="w-[600px] h-[600px] max-w-none rounded-2xl"
                style={{ width: 600, height: 600, maxWidth: 'none' }}
              />
            </Reveal>
          </div>

          <div className="flex flex-col justify-between h-[500px] pt-8">
            <Reveal className="entrance-block entrance-delay-2">
              <div className="info-block-center mt-12">
                <h3 className="text-3xl font-semibold text-[#3383b2] font-serif whitespace-nowrap">
                  我能做什么?
                </h3>
                <div className="ability-list">
                  <div className="ability-row">
                    <span className="ability-left">AI影像评估</span>
                    <span className="ability-separator">｜</span>
                    <span className="ability-right">Case拆解</span>
                  </div>
                  <div className="ability-row">
                    <span className="ability-left">数据质检</span>
                    <span className="ability-separator">｜</span>
                    <span className="ability-right">效果打标</span>
                  </div>
                  <div className="ability-row">
                    <span className="ability-left">样本整理</span>
                    <span className="ability-separator">｜</span>
                    <span className="ability-right">跨团队协作</span>
                  </div>
                  <div className="ability-row">
                    <span className="ability-left">审美判断</span>
                    <span className="ability-separator">｜</span>
                    <span className="ability-right">用户体验</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="entrance-block entrance-delay-4">
              <div className="info-block-center">
                <h3 className="text-3xl font-semibold text-[#3383b2] font-serif whitespace-nowrap">
                  长期规划
                </h3>
                <ul className="mt-3 space-y-2 text-base text-[var(--muted-foreground)]">
                  <li>深化多模态模型在自动化质检、</li>
                  <li>异常 Case 聚类中的应用，</li>
                  <li>持续优化人机协作效率</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}