import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div aria-hidden className="seki-gradient absolute inset-0 -z-10" />

      <h1 className="seki-rise flex w-full flex-col items-center text-center">
        <Image
          src="/seki-smile-logo.png"
          alt="Seki Smile"
          width={938}
          height={734}
          priority
          className="h-auto w-52 sm:w-64"
        />

        <span className="mt-12 block w-full text-[clamp(2.25rem,9vw,7rem)] font-semibold uppercase leading-[0.95] tracking-[0.06em]">
          Coming Soon
        </span>
      </h1>

      <div className="seki-breathe mt-10 h-px w-32 origin-center bg-foreground/60" />

      <p className="seki-rise mt-10 w-full max-w-xl text-balance text-center font-thai text-base leading-relaxed text-muted">
        แปรงสีฟันเจเนอเรชันใหม่กำลังจะมาถึง กลับมาเยี่ยมชมกันเร็ว ๆ นี้
      </p>

      <footer className="absolute inset-x-0 bottom-8 px-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        © {new Date().getFullYear()} Seki Smile
      </footer>
    </main>
  );
}
