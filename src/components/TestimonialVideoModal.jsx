import { useEffect } from "react";
import { X } from "lucide-react";

const LOCAL_VIDEO_PATTERN = /\.(mp4|mov|webm|ogg)(\?.*)?$/i;

function normalizeVideoUrl(videoUrl) {
  if (!videoUrl) {
    return "";
  }

  if (videoUrl.startsWith("./public/")) {
    return `/${videoUrl.slice("./public/".length)}`;
  }

  if (videoUrl.startsWith("public/")) {
    return `/${videoUrl.slice("public/".length)}`;
  }

  return videoUrl;
}

function buildEmbedUrl(videoUrl) {
  try {
    const parsedUrl = new URL(videoUrl);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean)[0];

      if (videoId) {
        const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
        embedUrl.searchParams.set("autoplay", "1");
        embedUrl.searchParams.set("rel", "0");
        embedUrl.searchParams.set("modestbranding", "1");
        return embedUrl.toString();
      }
    }

    if (
      hostname === "youtube.com" ||
      hostname === "m.youtube.com" ||
      hostname === "youtube-nocookie.com"
    ) {
      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      let videoId = parsedUrl.searchParams.get("v");

      if (!videoId && pathParts[0] === "embed") {
        videoId = pathParts[1];
      }

      if (!videoId && pathParts[0] === "shorts") {
        videoId = pathParts[1];
      }

      if (videoId) {
        const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
        embedUrl.searchParams.set("autoplay", "1");
        embedUrl.searchParams.set("rel", "0");
        embedUrl.searchParams.set("modestbranding", "1");
        return embedUrl.toString();
      }
    }

    if (hostname === "vimeo.com" || hostname === "player.vimeo.com") {
      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      const videoId = pathParts[0] === "video" ? pathParts[1] : pathParts[0];

      if (videoId) {
        const embedUrl = new URL(`https://player.vimeo.com/video/${videoId}`);
        embedUrl.searchParams.set("autoplay", "1");
        return embedUrl.toString();
      }
    }
  } catch {
    return videoUrl;
  }

  return videoUrl;
}

function resolveVideoSource(videoUrl) {
  const normalizedUrl = normalizeVideoUrl(videoUrl);

  if (!normalizedUrl) {
    return null;
  }

  if (LOCAL_VIDEO_PATTERN.test(normalizedUrl)) {
    return { kind: "file", src: normalizedUrl };
  }

  return { kind: "embed", src: buildEmbedUrl(normalizedUrl) };
}

export default function TestimonialVideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) {
    return null;
  }

  const source = resolveVideoSource(video.videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Lecture video ${video.name}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {video.name}
            </h3>
            <p className="text-sm text-slate-500">{video.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Fermer la video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="aspect-video w-full bg-black">
          {source?.kind === "file" ? (
            <video
              key={source.src}
              className="h-full w-full"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={source.src} />
              Votre navigateur ne prend pas en charge la lecture video.
            </video>
          ) : source?.src ? (
            <iframe
              title={video.name}
              src={source.src}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-300">
              La video est indisponible pour le moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
