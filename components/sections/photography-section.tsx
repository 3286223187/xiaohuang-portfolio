"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const initialPhotos = [
  { id: 1, src: "/images/placeholders/图片1.jpg", alt: "Photography work 1" },
  { id: 2, src: "/images/placeholders/图片2.jpg", alt: "Photography work 2" },
  { id: 3, src: "/images/placeholders/图片3.jpg", alt: "Photography work 3" },
  { id: 4, src: "/images/placeholders/图片4.jpg", alt: "Photography work 4" },
  { id: 5, src: "/images/placeholders/图片5.jpg", alt: "Photography work 5" },
  { id: 6, src: "/images/placeholders/图片6.jpg", alt: "Photography work 6" },
  { id: 7, src: "/images/placeholders/图片7.jpg", alt: "Photography work 7" },
];

const photoStackConfig = [
  { top: 96, scale: 1 },
  { top: 70, scale: 0.94 },
  { top: 50, scale: 0.89 },
  { top: 32, scale: 0.84 },
  { top: 18, scale: 0.79 },
  { top: 6, scale: 0.74 },
  { top: -2, scale: 0.70 },
];

const cardWidth = 512;

const getCardTransform = (index: number, isActiveHovered: boolean = false) => {
  const config = photoStackConfig[index];
  const scale = index === 0 && isActiveHovered ? 1.03 : config.scale;
  return `translateX(-50%) scale(${scale})`;
};

export function PhotographySection() {
  const [photos, setPhotos] = useState(initialPhotos);
  const [isStackHovered, setIsStackHovered] = useState(false);

  const handleNextPhoto = () => {
    setPhotos((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section id="photography" className="photography-section">
      <Container>
        <div className="photography-header">
          <Reveal>
            <p className="section-kicker">Photography</p>
          </Reveal>

          <Reveal delay={80}>
            <h2>Moments</h2>
          </Reveal>

          <Reveal delay={140}>
            <p>一些被我留下来的光影、街角和情绪。</p>
          </Reveal>
        </div>

        <div
          className="photo-stack"
          onMouseEnter={() => setIsStackHovered(true)}
          onMouseLeave={() => setIsStackHovered(false)}
        >
          <div className="photo-stack-inner">
            {photos.map((photo, index) => {
              const config = photoStackConfig[index];
              const isFirst = index === 0;

              return (
                <div
                  key={photo.id}
                  className={`photo-card ${isFirst ? "is-active" : ""}`}
                  onClick={isFirst ? handleNextPhoto : undefined}
                  style={{
                    width: `${cardWidth * config.scale}px`,
                    top: `${config.top}px`,
                    transform: getCardTransform(index, isStackHovered),
                    zIndex: photoStackConfig.length - index,
                    cursor: isFirst ? "pointer" : "default",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 90vw, 640px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}