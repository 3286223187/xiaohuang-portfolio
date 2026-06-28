"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const worksImages = [
  "/images/placeholders/图片1.jpg",
  "/images/placeholders/图片2.jpg",
  "/images/placeholders/图片3.jpg",
  "/images/placeholders/图片4.jpg",
  "/images/placeholders/图片5.jpg",
  "/images/placeholders/图片6.jpg",
];

const baseWorks = [
  { id: 1, src: worksImages[0] },
  { id: 2, src: worksImages[1] },
  { id: 3, src: worksImages[2] },
  { id: 4, src: worksImages[3] },
  { id: 5, src: worksImages[4] },
  { id: 6, src: worksImages[5] },
];

const groupWorks = [...baseWorks, ...baseWorks, ...baseWorks, ...baseWorks];

export function WorksPreviewSection() {
  return (
    <section className="works-preview-section">
      <div id="photography-section" className="photography-scroll-anchor"></div>
      <div className="works-preview-header">
        <Reveal>
          <div className="works-preview-icon">📸</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="works-preview-title">Sneak peek of my works</h2>
        </Reveal>
      </div>

      <div className="works-preview-gallery">
        <div className="works-preview-track">
          <div className="works-preview-group">
            {groupWorks.map((work, index) => (
              <div
                key={`group-a-${work.id}-${index}`}
                className={`works-preview-card works-preview-card-${work.id}`}
              >
                <Image
                  src={work.src}
                  alt={`Work preview ${work.id}`}
                  fill
                  className="works-preview-img"
                  sizes="240px"
                />
              </div>
            ))}
          </div>

          <div className="works-preview-group" aria-hidden="true">
            {groupWorks.map((work, index) => (
              <div
                key={`group-b-${work.id}-${index}`}
                className={`works-preview-card works-preview-card-${work.id}`}
              >
                <Image
                  src={work.src}
                  alt={`Work preview ${work.id}`}
                  fill
                  className="works-preview-img"
                  sizes="240px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
