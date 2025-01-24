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
]

export default function Home() {
  return (
    <div>
      <ul className="grid grid-cols-3">
      {links.map((item) => (
        <li className="bg-slate-100 py-1 px-2.5 rounded-md w-fit" key={item.href}>
          <Link href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}
