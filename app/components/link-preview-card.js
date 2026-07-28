import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function LinkPreviewCard({
  href,
  title,
  image,
  domain,
  xHref,
  imageFit = "contain",
}) {
  return (
    <div className="-ml-5 relative mt-2 w-[calc(100%+1.25rem)] overflow-hidden border border-cream-200 bg-cream-50/60 transition-colors hover:border-cream-300 hover:bg-cream-100/70 dark:border-dark-hover dark:bg-dark-card/60 dark:hover:border-dark-muted dark:hover:bg-dark-card">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-24 w-full"
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
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-4 py-3 pr-12">
          <p className="line-clamp-2 text-lg font-semibold leading-snug text-coffee-600 dark:text-dark-text">
            {title}
          </p>
          <p className="truncate text-base text-coffee-400/80 dark:text-dark-muted/80">
            {domain}
          </p>
        </div>
      </a>
      {xHref ? (
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${domain} post on X`}
          className="absolute bottom-3 right-4 z-10 text-coffee-400 transition-colors hover:text-coffee-600 dark:text-dark-muted dark:hover:text-dark-text"
        >
          <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
        </a>
      ) : null}
    </div>
  );
}
