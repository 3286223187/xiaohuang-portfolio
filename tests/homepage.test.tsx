import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "@/app/page";
import { siteData } from "@/data/site-data";

test("homepage renders the current homepage sections and key content", () => {
  const markup = renderToStaticMarkup(<Home />);

  assert.match(markup, new RegExp(siteData.profile.name));
  assert.match(markup, /Portfolio 2026/);
  assert.match(markup, new RegExp(siteData.about.eyebrow));
  assert.match(markup, /黄瀚晖 效果设计师/);
  assert.match(markup, /Moments/);
  assert.match(markup, new RegExp(siteData.contacts.title));
  assert.match(markup, new RegExp(siteData.thankYou.title));
  assert.match(markup, new RegExp(siteData.contacts.email.value));
  assert.match(markup, /Designed by Hanhui Huang/);
});

test("site data still centralizes contact and project metadata", () => {
  assert.ok(Boolean(siteData.openingScene.visual.src));
  assert.ok(Boolean(siteData.about.visual.src));
  assert.ok(siteData.experiences.items.length > 0);
  assert.ok(Boolean(siteData.thankYou.title));
  assert.ok(Boolean(siteData.contacts.wechat.value));
  assert.ok(Boolean(siteData.contacts.email.value));
  assert.ok(Boolean(siteData.contacts.resume.value));
  assert.equal(siteData.featuredProjects.items.every((project) => Boolean(project.coverImage.src)), true);
  assert.equal(siteData.featuredProjects.items.every((project) => Boolean(project.slug)), true);
});

test("homepage exposes the current section order in rendered markup", () => {
  const markup = renderToStaticMarkup(<Home />);

  const orderedAnchors = [
    "opening-scene",
    "about-section",
    "next-section",
    "experience-section",
    "photography-section",
    "photography",
    "contact-cta",
  ];

  let lastIndex = -1;

  for (const anchor of orderedAnchors) {
    const nextIndex = markup.indexOf(`id="${anchor}"`);
    assert.notEqual(nextIndex, -1);
    assert.ok(nextIndex > lastIndex);
    lastIndex = nextIndex;
  }
});

test("works preview uses local image assets instead of remote temporary URLs", () => {
  const markup = renderToStaticMarkup(<Home />);

  assert.match(markup, /Work preview 1/);
  assert.match(markup, /Work preview 6/);
  assert.doesNotMatch(markup, /minimax-algeng-chat-tts/);
  assert.doesNotMatch(markup, /_next\/image\?url=https/);
});
