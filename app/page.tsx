import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 font-sans">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-8 sm:px-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl">
            Welcome to My Blog
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Discover stories, thoughts, and ideas. Explore my latest posts and dive into topics that matter.
          </p>

          <div className="mt-8">
            <Link
              href="/blog"
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-zinc-50 px-8 text-lg font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:scale-105"
            >
              Read the Blog
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
