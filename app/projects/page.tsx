import Link from 'next/link';

const projects = [
  {
    id: '1',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store operations with real-time analytics, inventory tracking, and sales reports. Features include customizable widgets, data visualization, and export capabilities.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Redux'],
    githubUrl: 'https://github.com/username/ecommerce-dashboard',
    liveUrl: 'https://ecommerce-dashboard.demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop functionality, team workspaces, and real-time updates. Includes features like task assignments, due dates, and progress tracking.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Socket.io'],
    githubUrl: 'https://github.com/username/task-app',
    liveUrl: 'https://task-app.demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Application',
    description: 'A beautiful weather app with 7-day forecasts, location-based weather updates, and detailed weather metrics. Features include hourly forecasts, weather alerts, and multiple location support.',
    techStack: ['React', 'OpenWeather API', 'CSS Modules', 'Geolocation API'],
    githubUrl: 'https://github.com/username/weather-app',
    featured: true,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode support, blog integration with Sanity CMS, and smooth animations.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio.demo.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities. Includes features like read receipts, typing indicators, and message search.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/username/chat-app',
    liveUrl: 'https://chat-app.demo.com',
    featured: false,
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A full-featured blogging platform with markdown support, categories, tags, and user authentication. Includes an admin dashboard for content management.',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'NextAuth.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/blog-platform',
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on. Each project represents different challenges and learning experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {/* Title */}
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-16">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    </div>
  );
}
