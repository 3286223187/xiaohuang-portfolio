import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/project-detail-page";
import { ProjectModal } from "@/components/projects/project-modal";
import { getProjectBySlug } from "@/data/site-data";

type ProjectModalRouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectModalRoute({ params }: ProjectModalRouteProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectModal title={project.title}>
      <ProjectDetailPage project={project} mode="modal" />
    </ProjectModal>
  );
}
