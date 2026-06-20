"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const worksImages = [
  "https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-06-20%2FMiniMax-M2.7%2F2044781975029420231%2Fadf9a49d895eab4ea44e7f9e216d7384d95d911bf19c761a9d2f98bfa183357b..jpeg?Expires=1782026363&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=0cW65joXcQGYIDk3oj5ut2tXlv4%3D",
  "https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-06-20%2FMiniMax-M2.7%2F2044781975029420231%2Fd12db7f7edcf7481618c9696819e6154d7bb85492ead90ac2186499242356222..jpeg?Expires=1782026364&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=3pzhQR%2Bj8JEWkWnW1FIX4turUJE%3D",
  "https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-06-20%2FMiniMax-M2.7%2F2044781975029420231%2F91932a192998160f92c3ebb17adff5ee48514891e46a9c48fb144bbd6c2e25cf..jpeg?Expires=1782026365&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=5P1gp756X8nk%2BkWpIRFd%2FwpC9gI%3D",
  "https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-06-20%2FMiniMax-M2.7%2F2044781975029420231%2F1887bc1745fe13005ce7aa2fef5ff054220e41aecb525620145efde7f641b4f9..jpeg?Expires=1782026365&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=nVe72Xkdek3mY9Ct%2F6sSOXy7oZk%3D",
  "https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-06-20%2FMiniMax-M2.7%2F2044781975029420231%2F2813bfe45ee7abcfc0ebe8c69d71b4a3510adeedc3b381250754bc3ebc283316..jpeg?Expires=1782026366&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=cg52FPPTPGjjsu95%2FQPTtOdb5Rs%3D",
  "https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-06-20%2FMiniMax-M2.7%2F2044781975029420231%2F06d103a6910f6ea5e1930368e99c6ba1ad04d38aaedc39a18ff36ef728c08b9d..jpeg?Expires=1782026366&OSSAccessKeyId=LTAI5tGLnRTkBjLuYPjNcKQ8&Signature=P%2BKOhbPtff4Fp6epz9ofEMQ826E%3D",
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