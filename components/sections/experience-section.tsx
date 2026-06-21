"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const timelineItems = [
  {
    period: "2023-07 ~ 2023-09",
    company: "厦门鲸起万物影视传媒有限公司",
    role: "摄影&运营",
  },
  {
    period: "2024-04 ~ 2025-07",
    company: "刑事律师账号",
    role: "IP打造与自媒体运营",
  },
  {
    period: "2025-07 ~ 2026-04",
    company: "美图公司",
    role: "美颜相机&美图云修 效果设计师",
  },
];

type ProjectDetail = {
  title: string;
  type: string;
  image: string;
  responsibilities: string[];
  dimensions: string[];
  outputs?: { title: string; originalImage: string; resultImage: string }[];
  simpleOutputs?: { title: string; originalImage: string; resultImage: string }[];
  comparisonImage?: { before: string; after: string; description: string };
};

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    title: "AI 一键出片",
    type: "AIGC 生成效果评估",
    image: "/images/placeholders/AI一键出片.png",
    responsibilities: [
      "参与 AI 一键出片场景化生成效果评估",
      "使用豆包、Nano 等模型进行多轮生成测试与效果对比",
      "整理「原图—生成效果图—问题类型」对照样本",
      "从主体稳定性、风格一致性、局部细节、画面可用性等维度筛选生成结果",
    ],
    dimensions: [
      "主体稳定性：人物结构、五官、发丝、手部、服饰是否自然",
      "风格一致性：生成区域与原图色彩、光影、透视是否统一",
      "局部细节：背景纹理、融合边缘、生成细节是否自然",
      "画面可用性：是否适合用户保存、分享或作为上线效果展示",
    ],
    outputs: [
      { title: "彩色雪花", originalImage: "/images/placeholders/彩色雪花1.jpg", resultImage: "/images/placeholders/彩色雪花2.jpg" },
      { title: "换背景", originalImage: "/images/placeholders/ai换背景1.jpg", resultImage: "/images/placeholders/ai换背景2.jpg" },
      { title: "草地变绿", originalImage: "/images/placeholders/换草地1.jpg", resultImage: "/images/placeholders/换草地2.jpg" },
      { title: "配饰替换", originalImage: "/images/placeholders/换配饰1.jpg", resultImage: "/images/placeholders/换配饰2.jpg" },
      { title: "彩光矫正", originalImage: "/images/placeholders/彩光矫正1.jpg", resultImage: "/images/placeholders/彩光矫正2.jpg" },
      { title: "废片矫正", originalImage: "/images/placeholders/曝光矫正1.jpg", resultImage: "/images/placeholders/曝光矫正2.jpg" },
    ],
  },
  2: {
    title: "AI 写真",
    type: "AI 人像模板设计与效果筛选",
    image: "/images/placeholders/AI写真.jpg",
    responsibilities: [
      "参与写真风格制定、素材生成、Prompt 调优与效果筛选",
      "从人物质感、妆造风格、光影氛围等维度评估 AIGC 生成效果",
      "完成 6 套 AI 写真模板设计与上线支持",
    ],
    dimensions: [
      "人物质感",
      "妆造风格",
      "光影氛围",
      "五官稳定性",
      "用户保存与付费转化潜力",
    ],
    simpleOutputs: [
      { title: "", originalImage: "/images/placeholders/写真1.jpg", resultImage: "/images/placeholders/写真1.jpg" },
      { title: "", originalImage: "/images/placeholders/写真2.jpg", resultImage: "/images/placeholders/写真2.jpg" },
      { title: "", originalImage: "/images/placeholders/写真3.jpg", resultImage: "/images/placeholders/写真3.jpg" },
      { title: "", originalImage: "/images/placeholders/写真4.jpg", resultImage: "/images/placeholders/写真4.jpg" },
      { title: "", originalImage: "/images/placeholders/写真5.jpg", resultImage: "/images/placeholders/写真5.jpg" },
      { title: "", originalImage: "/images/placeholders/写真6.jpg", resultImage: "/images/placeholders/写真6.jpg" },
    ],
  },
  3: {
    title: "纯色背景去瑕疵",
    type: "B 端批量修图效果评估",
    image: "/images/placeholders/纯色背景祛瑕疵.jpg",
    responsibilities: [
      "参与美图云修纯色背景去瑕疵效果评估",
      "对比线上模型、新模型及竞品方案",
      "围绕瑕疵去除、边缘质量、阴影保留、道具保护、背景纯净度建立评估标准",
      "拆解边缘锯齿、发丝异常、背景偏色、阴影丢失、道具误删等高频 Case",
      "按 P0 / P1 输出优化建议，协助模型选型与版本验收",
    ],
    dimensions: [
      "瑕疵去除",
      "边缘质量",
      "阴影处理",
      "道具保留",
      "背景纯净度",
    ],
    comparisonImage: {
      before: "/images/placeholders/祛瑕疵1.jpg",
      after: "/images/placeholders/祛瑕疵2.jpg",
      description: "",
    },
  },
  4: {
    title: "AI 厚涂美颜",
    type: "风格化人像效果设计与模型评测",
    image: "/images/placeholders/厚涂2.jpg",
    responsibilities: [
      "面向云修 AI 工具箱的 cosplay 人像后期场景，参与厚涂风格效果设计",
      "通过 Prompt 搭建、模型评测、方案选型与效果验收，提升人像画面的光影层次、五官精致度和皮肤质感",
    ],
    dimensions: [
      "厚涂风格表现",
      "人物稳定性与一致性",
      "妆容与皮肤质感",
      "模型成本",
      "B 端批量使用可行性",
    ],
    simpleOutputs: [
      { title: "原图", originalImage: "/images/placeholders/厚涂1.jpg", resultImage: "/images/placeholders/厚涂2.jpg" },
      { title: "厚涂效果", originalImage: "/images/placeholders/厚涂3.jpg", resultImage: "/images/placeholders/厚涂4.jpg" },
      { title: "效果对比", originalImage: "/images/placeholders/厚涂5.jpg", resultImage: "/images/placeholders/厚涂6.jpg" },
    ],
  },
};

type OutputItem = { title: string; originalImage: string; resultImage: string };
type SimpleOutputItem = { title: string; originalImage: string; resultImage: string };

function OutputCard({ item }: { item: OutputItem }) {
  return (
    <div className="output-card group">
      <div className="output-image-wrapper">
        <Image
          src={item.originalImage}
          alt={item.title}
          fill
          className="object-cover output-image-original"
        />
        <Image
          src={item.resultImage}
          alt={`${item.title}效果图`}
          fill
          className="object-cover output-image-result"
        />
      </div>
       <p className="output-title">{item.title}</p>
    </div>
  );
}

function SimpleOutputCard({ item, small }: { item: SimpleOutputItem; small?: boolean }) {
  return (
    <div className={`output-card group${small ? ' output-card-small' : ''}`}>
      <div className="output-image-wrapper">
        <Image
          src={item.originalImage}
          alt={item.title}
          fill
          className="object-cover output-image-original"
        />
        <Image
          src={item.resultImage}
          alt={`${item.title}效果图`}
          fill
          className="object-cover output-image-result"
        />
      </div>
      <p className="output-title">{item.title}</p>
    </div>
  );
}

function SimpleImageCard({ image }: { image: string }) {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ImageOnlyCard({ image }: { image: string }) {
  return (
    <div className="image-only-card">
      <div className="image-only-wrapper">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ImageCompareCard({ originalImage, resultImage }: { originalImage: string; resultImage: string }) {
  return (
    <div className="image-compare-card">
      <div className="image-compare-wrapper">
        <Image
          src={originalImage}
          alt=""
          fill
          className="image-compare-original"
        />
        <Image
          src={resultImage}
          alt=""
          fill
          className="image-compare-result"
        />
      </div>
    </div>
  );
}

function BeforeAfterCompare({
  before,
  after,
  description,
}: {
  before: string;
  after: string;
  description: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="ba-compare">
      <div className="ba-compare-description">{description}</div>
      <div
        ref={containerRef}
        className="ba-compare-container"
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Image
          src={after}
          alt="效果图"
          fill
          className="ba-image ba-image-after"
        />
        <div
          className="ba-image-clip"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt="原图"
            fill
            className="ba-image ba-image-before"
          />
        </div>
        <div
          className="ba-divider"
          style={{ left: `${position}%` }}
        >
          <div className="ba-handle">
            <span className="ba-handle-arrow">‹</span>
            <span className="ba-handle-arrow">›</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const projectItems = Object.entries(projectDetails).map(([id, data]) => ({
  id: Number(id),
  title: data.title,
  image: data.image,
}));

function ProjectModal({
  project,
  projectId,
  onClose,
}: {
  project: (typeof projectDetails)[keyof typeof projectDetails];
  projectId: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[99998] bg-black/40 p-4 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative z-[99999] w-full max-h-[86vh] rounded-[24px] bg-white shadow-2xl overflow-hidden flex flex-col"
        style={{ width: 'min(860px, 88vw)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-6 pt-6 pb-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            ✕
          </button>
          <span className="inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
            {project.type}
          </span>
          <h2 className="mt-2 text-[34px] font-bold text-[var(--foreground)] leading-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
            围绕美颜相机与美图云修 AI影像能力迭代，参与 AI写真、AI一键出片、深度虚化、纯色背景去瑕疵等项目，负责 AIGC效果评估、模型效果对比、异常 Case 分类、评测样本整理及优化反馈，协同产品、算法团队推动效果落地。
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="modal-body scrollbar-modal flex-1 overflow-y-auto px-6 pb-6">
          {/* 关键产出 */}
          {project.outputs && (
            <div className="case-card">
              <h4 className="case-card-title">关键产出</h4>
              <div className="output-grid">
                {project.outputs.map((item, i) => (
                  <OutputCard key={i} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* 关键产出 - Image Compare Cards */}
          {project.simpleOutputs && projectId !== 2 && (
            <div className="case-card">
              <h4 className="case-card-title">关键产出</h4>
              <div className="image-compare-grid">
                {project.simpleOutputs.map((item, i) => (
                  <ImageCompareCard key={i} originalImage={item.originalImage} resultImage={item.resultImage} />
                ))}
              </div>
            </div>
          )}

          {/* 关键产出 - BeforeAfter 对比 */}
          {project.comparisonImage && (
            <div className="case-card">
              <h4 className="case-card-title">关键产出</h4>
              <BeforeAfterCompare
                before={project.comparisonImage.before}
                after={project.comparisonImage.after}
                description={project.comparisonImage.description}
              />
            </div>
          )}

          {/* AI 写真 - 关键产出 */}
          {projectId === 2 && project.simpleOutputs && (
            <div className="case-card">
              <h4 className="case-card-title">关键产出</h4>
              <div className="ai-photo-grid">
                {project.simpleOutputs.map((item, i) => (
                  <div key={i} className="ai-photo-card">
                    <div className="ai-photo-wrapper">
                      <Image
                        src={item.originalImage}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 我的职责 */}
          <div className="case-card">
            <h4 className="case-card-title">我的职责</h4>
            <ul className="case-list">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 评估维度与高频 Case */}
          {projectId === 3 ? (
            <div className="case-card">
              <h4 className="case-card-title">评估维度与高频 Case</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                  <span className="text-[var(--muted-foreground)]">瑕疵去除</span>
                  <span className="text-[var(--foreground)]">→ P0：大瑕疵无效果</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                  <span className="text-[var(--muted-foreground)]">边缘质量</span>
                  <span className="text-[var(--foreground)]">→ P0：边缘锯齿 / 发丝过渡异常</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                  <span className="text-[var(--muted-foreground)]">阴影处理</span>
                  <span className="text-[var(--foreground)]">→ P1：阴影丢失</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                  <span className="text-[var(--muted-foreground)]">道具保留</span>
                  <span className="text-[var(--foreground)]">→ P1：道具误删</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                  <span className="text-[var(--muted-foreground)]">背景纯净度</span>
                  <span className="text-[var(--foreground)]">→ P0：背景明显偏色 / P1：纯净度不足</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="case-card">
              <h4 className="case-card-title">评估维度</h4>
              <ul className="case-list">
                {project.dimensions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[var(--background)]" style={{ marginBottom: '-60px' }}>
      <div id="experience-section" className="experience-scroll-anchor"></div>
      <div className="flex flex-col">
        <div
          className="relative w-full"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Reveal>
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-4xl font-semibold text-[var(--foreground)] mb-4">
                  工作经历
                </h2>
                <div className="flex flex-col gap-6">
                  {timelineItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-48 text-right">
                        <p className="text-[var(--muted-foreground)] text-sm">{item.period}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                      <div className="w-64">
                        <p className="text-[var(--foreground)] font-semibold">{item.company}</p>
                        <p className="text-[var(--muted-foreground)] text-sm">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div
          className="relative w-full"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
            <Reveal>
              <h2 className="text-4xl font-semibold text-[var(--foreground)] mb-4 -mt-[100px] text-center">
                AI影像项目
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm text-center" style={{ marginTop: '26px', maxWidth: '800px' }}>
                围绕美颜相机与美图云修 AI影像能力迭代，参与 AI写真、AI一键出片、深度虚化、纯色背景去瑕疵等项目。<br />
                负责 AIGC效果评估、模型效果对比、异常 Case 分类、评测样本整理及优化反馈，协同产品、算法团队推动效果落地。<br />
                <span className="text-xs text-[var(--muted-foreground)]/60 font-bold">（点击图片查看项目详情）</span>
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex gap-8 justify-center mt-16 mt-5">
                {projectItems.map((project) => (
                  <div key={project.id} className="flex flex-col items-center gap-2">
                    <div
                      className="group relative w-60 cursor-pointer overflow-hidden rounded-lg bg-[var(--surface-strong)] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{ aspectRatio: '3/4' }}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={240}
                        height={320}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <span className="text-white text-sm font-medium">查看项目详情</span>
                      </div>
                    </div>
                    <p className="text-[var(--foreground)] text-xs">{project.title}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {selectedProject && projectDetails[selectedProject as keyof typeof projectDetails] && (
        <ProjectModal
          project={projectDetails[selectedProject as keyof typeof projectDetails]}
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}