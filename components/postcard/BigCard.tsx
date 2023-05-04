import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import { parseISO } from "date-fns";
import Image from "next/image";

const BigCard = ({ blog }: { blog: Blog }) => {
  return (
    <div
      className={
        "primary group overflow-hidden transition-all hover:bg-gray-50"
      }
    >
      <Link href={`/posts/${blog.slug}`}>
        <div className={"justify-between lg:flex"}>
          <div className="relative overflow-hidden">
            <Image
              src={`/head/${blog.slug}.png`}
              alt={blog.slug}
              width={1024}
              height={576}
              className="object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="flex flex-shrink-0 flex-grow flex-col justify-between px-2 py-8 sm:px-8">
            <div>
              <p className="text-xs font-bold text-[#6e6e73]">
                {blog.cat}
              </p>
              <h2 className={"font-title text-[32px] font-bold"}>
                {blog.title}
              </h2>
            </div>
            <div className="pt-2 text-sm font-semibold tracking-wide opacity-60">
              {parseISO(blog.publishDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BigCard;
