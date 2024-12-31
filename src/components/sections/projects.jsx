import Section from "../ui/section"
import Card from "../ui/card"
import { projectItems } from "../../constants/data";

export default function Projects() {
  return (
    <Section id={"projects"} title={"Projects"}>
      <div className={"grid gap-8 my-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"}>
        {projectItems.map((item) => (
          <Card
            key={item.id}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </Section>
  );
}

