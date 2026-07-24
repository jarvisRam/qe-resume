import type { PersonalProject } from "@/content/resume";
import { Card, CardKicker, CardTitle, CardBody } from "./Card";
import { TagChip } from "./TagChip";

export function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <Card as={project.url ? "a" : "div"} href={project.url}>
      <CardKicker>{project.kicker}</CardKicker>
      <CardTitle>{project.title}</CardTitle>
      <CardBody>{project.body}</CardBody>
      <div className="flex flex-wrap gap-2 pt-1">
        {project.chips.map((chip) => (
          <TagChip key={chip}>{chip}</TagChip>
        ))}
      </div>
    </Card>
  );
}
