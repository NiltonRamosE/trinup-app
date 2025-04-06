import DefaultLayout from "@/components/templates/default";
import { title } from "@/components/primitives";
import { Helmet } from "react-helmet-async";
import { blogPage } from "@/lib/constants/seoPages"

export default function BlogPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{blogPage.title}</title>
        <meta name="title" content={blogPage.title} />
        <meta name="description" content={blogPage.description} />
        <meta name="keywords" content={blogPage.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={blogPage.url} />
        <meta property="og:title" content={blogPage.title} />
        <meta property="og:description" content={blogPage.description} />
        <meta property="og:image" content={blogPage.image} />

        {/* Twitter */}
        <meta name="twitter:url" content={blogPage.url} />
        <meta name="twitter:title" content={blogPage.title} />
        <meta name="twitter:description" content={blogPage.description} />
        <meta name="twitter:image" content={blogPage.image} />
      </Helmet>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-6 md:py-8">
          <div className="inline-block max-w-lg text-center justify-center mb-8">
            <h1 className={title()}>Blog</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}
