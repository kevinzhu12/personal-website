export default function LinkPreviewCard({
  href,
  title,
  image,
  domain,
  imageFit = "contain",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="-ml-5 mt-2 flex min-h-24 w-[calc(100%+1.25rem)] overflow-hidden border border-cream-200 bg-cream-50/60 transition-colors hover:border-cream-300 hover:bg-cream-100/70 dark:border-dark-hover dark:bg-dark-card/60 dark:hover:border-dark-muted dark:hover:bg-dark-card"
    >
      {image ? (
        <div className="relative flex w-36 shrink-0 items-center justify-center overflow-hidden bg-cream-100 sm:w-48 dark:bg-dark-hover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className={`aspect-[1.91/1] h-full w-full ${
              imageFit === "contain" ? "object-contain p-1" : "object-cover"
            }`}
          />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-4 py-3">
        <p className="line-clamp-2 text-lg font-semibold leading-snug text-coffee-600 dark:text-dark-text">
          {title}
        </p>
        <p className="truncate text-base text-coffee-400/80 dark:text-dark-muted/80">
          {domain}
        </p>
      </div>
    </a>
  );
}
