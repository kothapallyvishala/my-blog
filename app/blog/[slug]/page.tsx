import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Post } from '@/types/blog';

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
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

  const post = await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  return post;
}

// Custom components for PortableText
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) {
        return null;
      }
      return (
        <div className="my-8 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(value).width(1200).height(600).url()}
            alt={value.alt || 'Blog post image'}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-12 mb-4 text-zinc-900 dark:text-zinc-50">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-10 mb-4 text-zinc-900 dark:text-zinc-50">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-8 mb-3 text-zinc-900 dark:text-zinc-50">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold mt-6 mb-2 text-zinc-900 dark:text-zinc-50">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-zinc-700 dark:text-zinc-300">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-zinc-900 dark:text-zinc-50">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-lg text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category._id}
                className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl mb-6">
          {post.title}
        </h1>

        {/* Author and Date */}
        <div className="mb-8 flex items-center gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-700">
          {post.author?.image && post.author.image.asset && (
            <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-600">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlFor(post.author.image).width(48).height(48).url()}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">
              {post.author?.name || 'Anonymous'}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Main Image */}
        {post.mainImage && post.mainImage.asset && (
          <div className="mb-12 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.mainImage.alt || post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
          <PortableText value={post.body} components={components} />
        </div>

        {/* Author Bio */}
        {post.author?.bio && post.author.bio.length > 0 && (
          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex gap-4">
              {post.author.image && post.author.image.asset && (
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-600">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlFor(post.author.image).width(64).height(64).url()}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  About {post.author.name}
                </h3>
                <div className="prose prose-sm prose-zinc dark:prose-invert">
                  <PortableText value={post.author.bio} />
                </div>
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
