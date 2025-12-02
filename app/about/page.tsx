export default function AboutPage() {
  const education = [
    {
      degree: 'Master of Technology (MTech)',
      field: 'Computer Science',
      university: 'Kakatiya University',
      period: '20XX - 20XX',
      description: 'Specialized in advanced computing concepts and software engineering practices.',
    },
    {
      degree: 'Bachelor of Technology (BTech)',
      field: 'Computer Science',
      university: 'Kakatiya University',
      period: '20XX - 20XX',
      description: 'Built a strong foundation in computer science fundamentals and programming.',
    },
  ];

  const techStack = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'REST APIs', icon: '🔗' },
    ],
    tools: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Figma', icon: '🎯' },
      { name: 'Vercel', icon: '▲' },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a passionate Frontend Developer dedicated to creating exceptional digital experiences.
            With a strong foundation in modern web technologies and an eye for design, I transform ideas
            into beautiful, functional, and user-friendly applications.
          </p>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            My journey in software development started during my undergraduate studies, and since then,
            I&apos;ve been continuously learning and growing. I believe in writing clean, maintainable code
            and following best practices to deliver high-quality products.
          </p>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-700"
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400" />
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {edu.degree}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                    {edu.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                  {edu.field} • {edu.university}
                </p>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-12">
          Tech Stack
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Frontend */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.tools.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
