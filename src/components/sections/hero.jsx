export default function Hero() {
  return (
    <main className="h-[70vh] md:h-screen flex justify-center flex-col items-start w-4/5 mx-auto">
      <p className="text-base font-medium md:text-2xl text-light-job dark:text-dark-job mb-4">
        Hello, my name is{" "}
      </p>
      <h1 className="font-extrabold text-light-Name dark:text-dark-Name text-responsive-text leading-[1] mb-4">
        Michael Tom
      </h1>
      <p
        className={
          "text-light-job dark:text-dark-job font-extrabold text-3xl sm:text-responsive-text leading-[1] mb-4"
        }
      >
        I am a Frontend Web Developer
      </p>
      <p
        className={
          "text-light-text-color dark:text-dark-text-color md:w-4/5 lg:w-3/5 md:font-medium md:text-2xl"
        }
      >
        I specialize in creating responsive
        and user-friendly websites.
      </p>
    </main>
  );
}
