import { Separator } from "@/components/ui/separator";

export default function Blog() {
  return (
    <main className="font-garamond">
      <section className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-4xl font-garamond text-coffee-600 dark:text-white tracking-tight">
            Blog
          </h2>
          <Separator className="bg-cream-200 dark:bg-dark-hover" />
        </div>

        <div className="space-y-5">
          <p className="text-lg font-garamond text-coffee-600 dark:text-dark-text leading-relaxed">
            Coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}

