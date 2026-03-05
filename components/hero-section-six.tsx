import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import siAirbnb from "@iconify/icons-simple-icons/airbnb";
import siDropbox from "@iconify/icons-simple-icons/dropbox";
import siStripe from "@iconify/icons-simple-icons/stripe";
import siCoinbase from "@iconify/icons-simple-icons/coinbase";
import siReddit from "@iconify/icons-simple-icons/reddit";
import siYcombinator from "@iconify/icons-simple-icons/ycombinator";
import siGithub from "@iconify/icons-simple-icons/github";
import { Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative">
          <Image src="/HackerNews.svg" alt="Logo" width={100} height={100} />
          <h1 className="mt-16 max-w-xl text-balance text-5xl font-medium">
            Hacker News
          </h1>

          <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl">
            A community-driven news aggregator for tech enthusiasts. Join us and
            stay updated on the latest tech news and trends. Explore the world
            of technology and innovation.
          </p>

          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:*:w-auto">
            <Button asChild variant="ghost">
              <a
                href="https://www.mediafire.com/file/2o5qjydtm5mc3zv/HackerNews.apk/file"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download APK from MediaFire
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link href="#link">
                <span className="text-nowrap">View Demo</span>
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="https://github.com/Shiv2576/hn-web.git">
                <Icon icon={siGithub} className="h-6 w-6 text-[#181717]" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
          <img
            src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />

          <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
            <Image
              src="/design.webp"
              alt="app screen"
              width="2880"
              height="1842"
              className="object-top-left size-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-center">
            Trusted by teams at:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Y Combinator */}
            <Icon icon={siYcombinator} className="h-6 w-6 text-[#FF6600]" />

            {/* Airbnb */}
            <Icon icon={siAirbnb} className="h-6 w-6 text-[#FF5A5F]" />

            {/* Dropbox */}
            <Icon icon={siDropbox} className="h-6 w-6 text-[#0061FF]" />

            {/* Stripe */}
            <Icon icon={siStripe} className="h-6 w-6 text-[#635BFF]" />

            {/* Coinbase */}
            <Icon icon={siCoinbase} className="h-12 w-12 text-[#0052FF]" />

            {/* Reddit */}
            <Icon icon={siReddit} className="h-6 w-6 text-[#FF4500]" />
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://shivdx.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:underline"
            >
              Built by shivdx
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const MistKitLogo = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "border-background bg-linear-to-b rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-yellow-300 to-orange-600 shadow-lg shadow-black/20 ring-1 ring-black/10",
      className,
    )}
  >
    <BookOpen className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
    <BookOpen className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
    <div className="z-1 h-4.5 absolute inset-2 m-auto w-px translate-y-px rounded-full bg-black/10"></div>
  </div>
);
