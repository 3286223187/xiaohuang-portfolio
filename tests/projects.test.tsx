import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "@/app/page";
import ProjectPage from "@/app/projects/[slug]/page";
import { getProjectBySlug, siteData } from "@/data/site-data";

test("homepage project cards link to project detail routes", () => {
  const markup = renderToStaticMarkup(<Home />);

  for (const project of siteData.featuredProjects.items) {
    assert.match(markup, new RegExp(`/projects/${project.slug}`));
  }
});

test("project data includes reusable detail fields for each featured project", () => {
  for (const project of siteData.featuredProjects.items) {
    assert.ok(Boolean(project.slug));
    assert.ok(Boolean(project.role));
    assert.ok(Boolean(project.period));
    assert.ok(Boolean(project.overview));
    assert.ok(Boolean(project.background));
    assert.ok(Boolean(project.goal));
    assert.ok(project.responsibilities.length > 0);
    assert.ok(project.outcomes.length > 0);
    assert.ok(Boolean(project.coverImage.src));
    assert.ok(project.gallery.length > 0);
    assert.ok(project.blocks.length > 0);
    assert.equal(project.blocks.every((block) => Boolean(block.type)), true);
  }
});

test("multi-case projects can define reusable subProjects data", () => {
  const aiProject = getProjectBySlug("ai-portrait-template-design");

  assert.ok(aiProject?.subProjects);
  assert.ok((aiProject?.subProjects?.length ?? 0) >= 3);
  assert.equal(
    aiProject?.subProjects?.every(
      (subProject) =>
        Boolean(subProject.id) &&
        Boolean(subProject.label) &&
        Boolean(subProject.summary) &&
        subProject.images.length > 0 &&
        subProject.blocks.length > 0,
    ),
    true,
  );
});

test("getProjectBySlug returns the matching project and undefined for missing slugs", () => {
  const project = getProjectBySlug(siteData.featuredProjects.items[0].slug);
  const missing = getProjectBySlug("missing-project");

  assert.equal(project?.slug, siteData.featuredProjects.items[0].slug);
  assert.equal(missing, undefined);
});

test("project detail page renders shared detail sections from project data", async () => {
  const project = siteData.featuredProjects.items[0];
  const page = await ProjectPage({
    params: Promise.resolve({ slug: project.slug }),
  });
  const markup = renderToStaticMarkup(page);

  assert.match(markup, new RegExp(project.title));
  assert.match(markup, new RegExp(project.coverImage.src));
  assert.match(markup, new RegExp(project.blocks[0].title ?? ""));
  assert.match(markup, new RegExp(project.blocks[0].body ?? ""));
  assert.match(markup, /返回首页/);
});

test("project detail page renders project-specific block content", async () => {
  const project = siteData.featuredProjects.items[1];
  const page = await ProjectPage({
    params: Promise.resolve({ slug: project.slug }),
  });
  const markup = renderToStaticMarkup(page);

  for (const block of project.blocks) {
    if (block.title) {
      assert.match(markup, new RegExp(block.title));
    }
  }

  assert.match(markup, new RegExp(project.blocks[1].images?.[0].caption ?? ""));
});
