import Section from "../ui/section";
import Button from "../ui/button";
export default function Contact() {
  return (
    <Section
      id={"contact"}
      title={"Contact Me"}
      style={"text-center flex flex-col justify-center items-center h-[70vh] gap- md:h-screen"}
    >
      <div>
        <p className={"font-bold mb-4 text-light-text-color dark:text-dark-text-color md:text-[2rem]"}>
          You can reach out to me via email or connect with me on social media.
        </p>
        <div className={"flex justify-center"}>
          <Button Icon href="mailto:mic81070@gmail.com">
            Send me a message
          </Button>
        </div>
      </div>
    </Section>
  );
}
