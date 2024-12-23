import { Separator } from "@/components/ui/separator";

export default function SharedFooter() {
  return (
    <footer className="pt-8 pb-8">
      <Separator className="mb-8 bg-cream-200 dark:bg-dark-hover" />
      <div className="flex justify-center text-coffee-400 dark:text-dark-muted text-sm font-cal">
        {/* <a
          href="#"
          className="hover:text-coffee-600 dark:hover:text-dark-text transition-colors"
        >
          Back to Top
        </a> */}
      </div>
    </footer>
  );
}
