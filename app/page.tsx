import Link from "next/link";

const links = [
  {
    label: "Day-1",
    href: "/day-1",
  },
  {
    label: "Day-2",
    href: "/day-2",
  },
  {
    label: "Day-3",
    href: "/day-3",
  },
  {
    label: "Day-4",
    href: "/day-4",
  },
  {
    label: "Day-5",
    href: "/day-5",
  },
]

export default function Home() {
  return (
    <div>
      <ul className="flex flex-col">
      {links.map((item) => (
        <li className="p-2.5 border-b border-neutral-300 last:border-none" key={item.href}>
          <Link href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}
