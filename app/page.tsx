import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Post } from '@/types/blog';

// Dummy featured projects data
const featuredProjects = [
  {
    id: '1',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store operations with real-time analytics.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce-dashboard',
    liveUrl: 'https://ecommerce-dashboard.demo.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop functionality and team features.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/task-app',
    liveUrl: 'https://task-app.demo.com',
  },
  {
    id: '3',
    title: 'Weather Application',
    description: 'A beautiful weather app with 7-day forecasts and location-based weather updates.',
    techStack: ['React', 'OpenWeather API', 'CSS'],
    githubUrl: 'https://github.com/username/weather-app',
  },
];

async function getLatestPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    body
  }`;

  const posts = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return posts;
}

export default async function Home() {
  const latestPosts = await getLatestPosts();

  return (
    <div className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="text-blue-600 dark:text-blue-400">Vishala Kothapally</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer passionate about crafting beautiful, performant, and user-friendly web experiences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-zinc-50 px-8 text-lg font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:scale-105"
            >
              View Projects
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="flex h-14 items-center justify-center gap-2 rounded-full border-2 border-zinc-900 dark:border-zinc-50 px-8 text-lg font-medium text-zinc-900 dark:text-zinc-50 transition-all hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-50 dark:hover:text-zinc-900 hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            View All
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            View All
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-zinc-500 dark:text-zinc-400">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
              >
                {post.mainImage && post.mainImage.asset && (
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.mainImage.alt || post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  {post.categories && post.categories.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.categories.slice(0, 2).map((category) => (
                        <span
                          key={category._id}
                          className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
