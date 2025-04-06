import DefaultLayout from "@/components/templates/default";
import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-6 md:py-8 min-h-screen">
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <h1 className={title()}>Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
        </div>
      </section>
    </DefaultLayout>
  );
}
