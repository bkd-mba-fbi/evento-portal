import DOMPurify from "dompurify";

const CONFIG = {
  ALLOWED_TAGS: [
    "br",
    "div",
    "span",
    "a",
    "ul",
    "ol",
    "li",
    "sup",
    "sub",
    "code",
    "cite",
  ],
  ALLOWED_ATTR: ["style", "href"],
};
export function sanitize(source: string) {
  return DOMPurify.sanitize(source, CONFIG);
}
