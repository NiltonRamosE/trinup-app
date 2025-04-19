import { title } from "@/components/primitives";
import DefaultLayout from "@/components/templates/default";
import { Helmet } from "react-helmet-async";
import { shopPage } from "@/lib/constants/seoPages"

export default function ShopPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{shopPage.title}</title>
        <meta name="title" content={shopPage.title} />
        <meta name="description" content={shopPage.description} />
        <meta name="keywords" content={shopPage.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={shopPage.url} />
        <meta property="og:title" content={shopPage.title} />
        <meta property="og:description" content={shopPage.description} />
        <meta property="og:image" content={shopPage.image} />

        {/* Twitter */}
        <meta name="twitter:url" content={shopPage.url} />
        <meta name="twitter:title" content={shopPage.title} />
        <meta name="twitter:description" content={shopPage.description} />
        <meta name="twitter:image" content={shopPage.image} />

        <link rel="canonical" href={shopPage.url}/>
      </Helmet>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Tienda</h1>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}
