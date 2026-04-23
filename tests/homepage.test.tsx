import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "@/app/page";
import { siteData } from "@/data/site-data";

test("homepage renders the m2 sections and real homepage content from site data", () => {
  const markup = renderToStaticMarkup(<Home />);

  assert.match(markup, new RegExp(siteData.openingScene.name));
  assert.match(markup, new RegExp(siteData.openingScene.title));
  assert.match(markup, new RegExp(siteData.about.title));
  assert.match(markup, new RegExp(siteData.abilityModel.title));
  assert.match(markup, new RegExp(siteData.experiences.title));
  assert.match(markup, new RegExp(siteData.beyondWork.title));
  assert.match(markup, new RegExp(siteData.closingSignature.title));
  assert.match(markup, new RegExp(siteData.contacts.title));
  assert.match(markup, new RegExp(siteData.thankYou.title));
  assert.match(markup, new RegExp(siteData.profile.name));
  assert.match(markup, new RegExp(siteData.contacts.email.value));

  for (const project of siteData.featuredProjects.items) {
    assert.match(markup, new RegExp(project.title));
    assert.match(markup, new RegExp(project.coverImage.src));
    assert.match(markup, new RegExp(project.description));
  }

  assert.equal(siteData.featuredProjects.items.length, 4);
});

test("site data centralizes homepage, ability model, experiences, projects, and contacts content", () => {
  assert.ok(siteData.abilityModel.items.length === 3);
  assert.ok(Boolean(siteData.openingScene.title));
  assert.ok(siteData.experiences.items.length > 0);
  assert.ok(siteData.beyondWork.cards.length > 0);
  assert.ok(siteData.closingSignature.notes.length > 0);
  assert.ok(Boolean(siteData.thankYou.title));
  assert.ok(Boolean(siteData.contacts.wechat.value));
  assert.ok(Boolean(siteData.contacts.email.value));
  assert.ok(Boolean(siteData.contacts.resume.value));
  assert.equal(siteData.featuredProjects.items.every((project) => Boolean(project.coverImage.src)), true);
  assert.equal(siteData.featuredProjects.items.every((project) => Boolean(project.slug)), true);
});

test("homepage exposes the m2 section order in rendered markup", () => {
  const markup = renderToStaticMarkup(<Home />);

  const orderedAnchors = [
    "opening-scene",
    "about-section",
    "ability-model",
    "experience-timeline",
    "featured-projects",
    "beyond-work",
    "closing-signature",
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
