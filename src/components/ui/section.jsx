export default function Section({ id, title, children, style, sectionStyle }) {
  return (
    <section id={id} className={sectionStyle}>
      <div className={`w-4/5 mx-auto py-16 ${style}`}>
        <h2 className={"text-[2rem] md:text-[4rem] text-center font-bold"}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
