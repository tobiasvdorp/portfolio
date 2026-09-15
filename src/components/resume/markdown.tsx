import { ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

function isExternalHref(href: string | undefined) {
  return typeof href === "string" && /^(?:https?:)?\/\//.test(href);
}

function MarkdownLink({
  children,
  className,
  href,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  const isExternalLink = isExternalHref(href);

  return (
    <a
      {...props}
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      className={cn(className, isExternalLink && "external-link")}
    >
      {children}
      {isExternalLink ? (
        <ExternalLink aria-hidden="true" className="external-link-icon" />
      ) : null}
    </a>
  );
}

const markdownComponents = { a: MarkdownLink };

export function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("prose", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
