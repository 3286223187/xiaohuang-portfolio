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
  overview?: string;
  responsibilities: string[];
  dimensions: string[];
  summary?: string;
  gallery?: string[];
  galleryLinks?: string[];
  videoSrc?: string;
  outputs?: { title: string; originalImage: string; resultImage: string }[];
  simpleOutputs?: { title: string; originalImage: string; resultImage: string }[];
  comparisonImage?: { before: string; after: string; description: string };
  videoPages?: VideoPage[];
};

type VideoPage = {
  title: string;
  type: string;
  responsibilities: string;
  description: string;
  videoSrc: string;
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
  5: {
    title: "厦门中山路系列微纪录片项目制作",
    type: "微纪录片 / 主题策划 / 分镜脚本 / 摄影 / 后期制作",
    image: "/images/placeholders/中山路项目封面.jpg",
    overview: "在「烟火百年，老街新韵」厦门中山路系列微纪录片项目中，参与项目主题策划、内容结构梳理与拍摄方案制定，负责摄影及视频编导相关工作，推动项目从前期创意到影像落地。",
    responsibilities: [
      "主题策划：参与「烟火百年，老街新韵」项目讨论，梳理中山路老街、商户、人文与城市记忆之间的内容关系",
      "内容结构：协助梳理微纪录片内容框架，明确拍摄重点、叙事线索与画面表达方向",
      "拍摄方案：参与制定现场拍摄方案，规划镜头内容、场景调度与拍摄节奏",
      "现场拍摄：负责镜头设计与现场拍摄，完成街区环境、人物状态、商户空间与城市细节的影像记录",
      "沟通协调：参与演员、商户及现场人员沟通，保障拍摄流程顺利推进",
    ],
    dimensions: [
      "完成厦门中山路系列微纪录片项目影像素材拍摄",
      "参与项目从主题策划、内容结构到现场执行的完整流程",
      "沉淀城市街区、人文烟火、商户故事等纪录片式影像表达经验",
      "提升了在真实场景下的镜头组织、现场调度和影像叙事能力",
    ],
    summary: "这个项目让我更完整地理解了纪录片项目从前期创意到现场拍摄的落地过程。相比单纯完成画面拍摄，我更关注如何通过镜头、人物和场景，把城市空间中的故事感和真实感表达出来。",
    videoSrc: "/images/placeholders/中山路.MP4",
  },
  6: {
    title: "IP打造及新媒体运营",
    type: "内容运营 / 0-1账号孵化 / 数据复盘",
    image: "/images/placeholders/法律封面2.jpg",
    overview: "参与厦门本地法律垂类短视频账号运营，围绕刑事案件、经济案件与办案日常进行内容策划和账号包装，面向涉案当事人及家属提供法律知识科普与咨询转化入口。",
    responsibilities: [
      "参与法律垂类账号从 0-1 搭建，明确「办案日常 / 案例解析」内容方向。",
      "参与选题筛选、内容结构优化与脚本撰写，提升内容专业度与可看性。",
      "负责拍摄协作、剪辑执行、发布运营，累计参与输出 450+ 条内容。",
      "根据播放、互动与咨询转化数据，优化内容表达与转化链路。",
    ],
    dimensions: [
      "参与账号从 0-1 孵化，运营期间全平台累计涨粉 3.6w。",
      "累计参与输出短视频内容 450+ 条，参与打造 19 条爆款视频。",
      "单篇最高播放量 1224.7w+，最高获赞量 20.7w。",
      "转化精准消费用户 80+，累计变现 30w+。",
    ],
    summary: "这个项目让我完整参与了一个垂类账号从内容定位、选题策划、内容生产到用户转化的运营链路，也让我更理解内容表达如何服务于用户信任和商业转化。",
    gallery: [
      "/images/placeholders/抖音2.png",
      "/images/placeholders/小红书2.png",
      "/images/placeholders/公众号2.png",
    ],
    galleryLinks: [
      "https://www.douyin.com/user/MS4wLjABAAAAt928WIxK13qMZHjEQ_HBxWRrBeB1Z4AXrDBc85QluPc?from_tab_name=main",
      "https://www.xiaohongshu.com/user/profile/6241efd600000000100088d5?xsec_token=ABIZScDbcEcKS3EqEACoJGRwtJHsIQbV9b3Oooi3eMtGs%3D&xsec_source=pc_search",
      "#视频号链接占位符",
    ],
  },
  7: {
    title: "校园影像项目制作",
    type: "创意构思 / 分镜脚本 / 摄像 / 剪辑 / 调色",
    image: "/images/placeholders/姥爷的故事封面.png",
    overview: "参与剧情短片、微剧情短视频与纪录片预告剪辑等校园影像项目，覆盖前期创意、现场拍摄、灯光美术、素材筛选、后期剪辑、调色与成片输出等环节。",
    responsibilities: [
      "纪录片预告剪辑：完成课堂纪录片预告片剪辑，负责素材筛选、叙事节奏把控、画面组接，音乐卡点与声画同步，突出纪录片主题氛围与观看吸引力",
      "剧情片制作：参与剧情短片《钢の琴》的拍摄制作，主要负责现场灯光布置、美术及后期剪辑，调色工作，协助完成影片整体视觉氛围搭建与叙事节奏优化",
      "微剧情短视频制作：参与微剧情短视频《姥爷的故事》的全面制作，从创意讨论到场景布置全程参与，担任制片、灯光、后期岗位，协助推进短片从前期筹备到成片落地",
    ],
    dimensions: [
      "熟悉校园影像项目从前期策划、拍摄执行到后期成片的基本流程",
      "能够根据主题需求进行素材筛选、镜头组接和叙事节奏调整",
      "具备一定的现场灯光、美术布置和拍摄协作经验",
      "能够通过剪辑，调色和音乐节奏提升影片的情绪表达与完成度",
      "对纪录片、剧情片和短视频三类影像表达方式有基础实践经验",
    ],
    summary: "这组校园影像项目让我从单一剪辑执行，逐步接触到策划、拍摄、灯光、美术、调色和成片输出等多个环节。相比只完成画面拼接，我更关注影像项目如何通过镜头、节奏和情绪组织，把主题表达得更完整、更有观看感。",
    videoPages: [
      {
        title: "剧情片《钢の琴》",
        type: "剧情短片 / 现场拍摄 / 灯光美术 / 后期剪辑",
        responsibilities: "现场灯光布置、美术协作、后期剪辑、调色",
        description: "参与剧情短片《钢の琴》的拍摄制作，主要负责现场灯光布置、美术及后期剪辑、调色工作，协助完成影片整体视觉氛围搭建与叙事节奏优化。",
        videoSrc: "/images/placeholders/钢の琴.mp4",
      },
      {
        title: "《姥爷的故事》",
        type: "微剧情短视频 / 制片 / 灯光 / 后期",
        responsibilities: "创意讨论、分镜脚本、场景布置、灯光执行、剪辑、调色",
        description: "参与微剧情短视频《姥爷的故事》的全面制作，从创意讨论到场景布置全程参与，担任制片、美术、灯光、后期岗位，协助推进短片从前期筹备到成片落地。",
        videoSrc: "/images/placeholders/姥爷和我.mp4",
      },
      {
        title: "纪录片预告剪辑",
        type: "纪录片预告片 / 后期剪辑 / 节奏把控",
        responsibilities: "素材筛选、叙事节奏把控、画面组接、声画同步、成片输出",
        description: "完成课堂纪录片预告片剪辑，负责素材筛选、叙事节奏把控、画面组接，音乐卡点与声画同步。通过城市、飞行、地标等镜头组合，突出纪录片的主题氛围与观看吸引力。",
        videoSrc: "/images/placeholders/预告片剪辑.mp4",
      },
    ],
  },
  8: {
    title: "校园公众号运营",
    type: "公众号运营 / 内容策划 / 摄影拍摄 / 图文排版",
    image: "/images/placeholders/照片3.png",
    overview: "负责学校官方公众号内容运营，围绕校园活动、人物故事与校园生活进行内容策划与图文创作。项目中独立完成 40+ 篇推文的选题策划、摄影拍摄、排版发布与基础数据复盘，累计阅读量达 15w+，积累了校园内容传播与图文运营经验。",
    responsibilities: [
      "选题策划：围绕校园活动、学生故事、志愿服务与校园生活进行推文选题策划",
      "内容采集：负责活动现场摄影、人物素材拍摄与图文素材整理",
      "图文编辑：完成公众号推文撰写、图片筛选、版面排版与发布检查",
      "发布运营：独立完成 40+ 篇推文发布，保障内容表达、视觉呈现与发布时间节奏",
      "数据复盘：关注阅读量、传播效果与用户反馈，为后续选题和内容表达提供参考",
    ],
    dimensions: [
      "独立完成 40+ 篇公众号推文",
      "内容覆盖校园活动、人物故事、校园生活等方向",
      "累计阅读量达 15w+",
      "提升了图文内容策划、现场拍摄、排版发布与校园传播能力",
    ],
    summary: "这次经历让我完整参与了公众号内容从选题、采集、编辑到发布的运营流程。相比单纯完成图文排版，我更关注如何通过内容主题、现场图片和排版节奏，让校园信息更容易被阅读、理解和传播。",
    gallery: [
      "/images/placeholders/抖音2.png",
      "/images/placeholders/小红书2.png",
      "/images/placeholders/公众号2.png",
      "/images/placeholders/校园1.png",
      "/images/placeholders/校园账号1.png",
      "/images/placeholders/校园账号2.png",
    ],
    galleryLinks: [
      "https://www.douyin.com/user/MS4wLjABAAAAt928WIxK13qMZHjEQ_HBxWRrBeB1Z4AXrDBc85QluPc?from_tab_name=main",
      "https://www.xiaohongshu.com/user/profile/6241efd600000000100088d5?xsec_token=ABIZScDbcEcKS3EqEACoJGRwtJHsIQbV9b3Oooi3eMtGs%3D&xsec_source=pc_search",
      "#视频号链接占位符",
      "",
      "",
      "",
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

const aiProjects = projectItems.filter(p => p.id >= 1 && p.id <= 4);
const contentProjects = projectItems.filter(p => p.id >= 5 && p.id <= 8);

function ProjectModal({
  project,
  projectId,
  onClose,
}: {
  project: (typeof projectDetails)[keyof typeof projectDetails];
  projectId: number;
  onClose: () => void;
}) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const preventScrollKeys = [
      " ",
      "Space",
      "PageUp",
      "PageDown",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if (isTyping) return;

      if (preventScrollKeys.includes(e.key) || preventScrollKeys.includes(e.code)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const modalContent = modalContentRef.current;
      if (!modalContent) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const target = e.target as Node;

      if (!modalContent.contains(target)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = modalContent;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (e.deltaY < 0 && isAtTop) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (e.deltaY > 0 && isAtBottom) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.stopPropagation();
    };

    document.addEventListener("keydown", handleEsc);
    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("wheel", handleWheel, { passive: false } as EventListenerOptions);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("wheel", handleWheel, { passive: false } as EventListenerOptions);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[99998] bg-black/40 p-4 flex items-center justify-center"
      style={{ overscrollBehavior: 'none' }}
      onClick={onClose}
      onWheel={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div
        className="relative z-[99999] w-full max-h-[86vh] rounded-[24px] bg-white shadow-2xl overflow-hidden flex flex-col"
        style={{ width: 'min(860px, 88vw)', overscrollBehavior: 'contain' }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-6 pt-6 pb-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            ✕
          </button>
          <h2 className="mb-3 text-[34px] font-bold text-[var(--foreground)] leading-tight">
            {project.title}
          </h2>
          {projectId !== 7 && (
            <span className="inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent)] mb-4">
              {project.type}
            </span>
          )}
          {projectId === 7 && (
            <span className="inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent)] mb-4">
              创意构思 / 分镜脚本 / 摄像 / 剪辑 / 调色
            </span>
          )}
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            {project.overview || "围绕美颜相机与美图云修 AI影像能力迭代，参与 AI写真、AI一键出片、深度虚化、纯色背景去瑕疵等项目，负责 AIGC效果评估、模型效果对比、异常 Case 分类、评测样本整理及优化反馈，协同产品、算法团队推动效果落地。"}
          </p>
        </div>

        {/* Scrollable Content */}
        <div ref={modalContentRef} className="modal-body scrollbar-modal flex-1 overflow-y-auto px-6 pb-6" style={{ overscrollBehavior: 'contain' }}>
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

          {/* 账号概况 - 仅内容运营项目 */}
          {projectId >= 5 && project.gallery && (
            <div className="case-card">
              {projectId === 8 ? (
                <>
                  {/* 校园账号1和2 - 横向排列 */}
                  <div className="flex gap-6 justify-center items-end mb-6">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="relative overflow-hidden rounded-xl"
                        style={{ width: '288px', aspectRatio: '768/450', backgroundColor: '#F7F8FA' }}
                      >
                        <Image
                          src={project.gallery[4]}
                          alt="校园账号1"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="relative overflow-hidden rounded-xl"
                        style={{ width: '288px', aspectRatio: '768/450', backgroundColor: '#F7F8FA' }}
                      >
                        <Image
                          src={project.gallery[5]}
                          alt="校园账号2"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  {/* 校园1图片 - 居中显示 */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="relative overflow-hidden rounded-xl"
                        style={{ width: '728px', aspectRatio: '1406/823', backgroundColor: '#F7F8FA' }}
                      >
                        <Image
                          src={project.gallery[3]}
                          alt="账号截图 4"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* 非项目8的原有布局 */
                <div className="flex gap-6 justify-center items-end">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      {i === 2 ? (
                        <>
                          <div
                            className="relative overflow-hidden rounded-xl"
                            style={{ width: '220px', aspectRatio: '9/16', backgroundColor: '#F7F8FA' }}
                          >
                            <Image
                              src={img}
                              alt={`账号截图 ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)]">
                            视频号@厦门周律师律政蝙蝠
                          </span>
                        </>
                      ) : (
                        <a
                          href={project.galleryLinks?.[i] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 cursor-pointer"
                        >
                          <div
                            className="relative overflow-hidden rounded-xl"
                            style={{ width: '220px', aspectRatio: '9/16', backgroundColor: '#F7F8FA' }}
                          >
                            <Image
                              src={img}
                              alt={`账号截图 ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors">
                            {i === 0 && "抖音@厦门周律师"}
                            {i === 1 && "小红书@律政蝙蝠厦门周律师"}
                          </span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 视频播放器 - 仅项目5 */}
          {projectId === 5 && project.videoSrc && (
            <div className="case-card">
              <video
                src={project.videoSrc}
                poster="/images/placeholders/中山路.jpg"
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="w-full rounded-xl"
                style={{ maxHeight: '400px' }}
              />
            </div>
          )}

          {/* 分页式视频展示 - 仅项目7 */}
          {projectId === 7 && project.videoPages && (
            <div className="case-card">
              {/* 分页按钮 */}
              <div className="flex justify-center items-center gap-3" style={{ marginBottom: '18px', marginTop: '-6px' }}>
                {project.videoPages.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVideoIndex(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      activeVideoIndex === index
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--accent-soft)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]/20"
                    }`}
                  >
                    0{index + 1} {index === 0 ? "剧情短片《钢の琴》" : index === 1 ? "微剧情短视频《姥爷的故事》" : page.title}
                  </button>
                ))}
              </div>

              {/* 视频区域 */}
              <div
                className="mb-2 rounded-xl overflow-hidden"
                style={{ backgroundColor: '#000', aspectRatio: '16/9' }}
                onKeyDown={(e) => {
                  if (e.code === "Space" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                tabIndex={-1}
              >
                <video
                  src={project.videoPages[activeVideoIndex].videoSrc}
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  onKeyDown={(e) => {
                    if (e.code === "Space" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  tabIndex={-1}
                  className="w-full h-full"
                  style={{ backgroundColor: '#000', objectFit: 'contain' }}
                />
              </div>

              {/* 项目信息 */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">项目名称</p>
                  <p className="text-[var(--foreground)] font-medium">{activeVideoIndex === 0 ? "《钢の琴》" : project.videoPages[activeVideoIndex].title}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">我的负责内容</p>
                  <p className="text-[var(--foreground)] text-sm">{project.videoPages[activeVideoIndex].responsibilities}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">项目说明</p>
                  <p className="text-[var(--foreground)] text-sm leading-relaxed">{project.videoPages[activeVideoIndex].description}</p>
                </div>
              </div>
            </div>
          )}

          {/* 我的职责 - 仅非项目7 */}
          {projectId !== 7 && (
            <div className="case-card">
              <h4 className="case-card-title">我的职责</h4>
              <ul className="case-list">
                {project.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

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
            projectId !== 7 && (
              <div className="case-card">
                <h4 className="case-card-title">
                  {projectId >= 5 ? "项目成果" : "评估维度"}
                </h4>
                <ul className="case-list">
                  {project.dimensions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* 项目总结 - 仅内容运营项目且非项目7 */}
          {projectId >= 5 && projectId !== 7 && project.summary && (
            <div className="case-card">
              <h4 className="case-card-title">项目总结</h4>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {project.summary}
              </p>
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

        {/* 内容运营项目 */}
        <div
          className="relative w-full"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
            <Reveal>
              <h2 className="text-4xl font-semibold text-[var(--foreground)] mb-4 text-center">
                内容运营项目
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm text-center" style={{ marginTop: '26px', maxWidth: '800px' }}>
                从内容策划、账号定位到品牌推广，积累了从 0 到 1 的账号孵化与品牌策划经验。<br />
                关注内容表达、用户沟通与增长路径的持续迭代。<br />
                <span className="text-xs text-[var(--muted-foreground)]/60 font-bold">（点击图片查看项目详情）</span>
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex gap-8 justify-center mt-16">
                {contentProjects.map((project) => (
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
                {aiProjects.map((project) => (
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