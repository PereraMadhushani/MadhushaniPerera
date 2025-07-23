"use client";

import Link from "next/link";
import  {usePathname} from "next/navigation";

// const links = [
//     {
//         name: "home",
//         path: "/",
//     },
//     {
//         name: "services",
//         path: "/services",
//     },
//     {
//         name: "resume",
//         path: "/resume",
//     },
//     {
//         name: "work",
//         path: "/work",
//     },
//     {
//         name: "contact",
//         path: "/contact",
//     },
// ];

const links = [
  { name: "home", path: "/", type: "scroll" },
  { name: "services", path: "services", type: "scroll" },
  { name: "work", path: "work", type: "scroll" },
  { name: "resume", path: "/resume", type: "route" },
  { name: "contact", path: "/contact", type: "route" },
];

const Nav = () => {
    const pathname  = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-8">
        {links.map((link, index)=>{
            return (
                <Link href={link.path} key = {index} className={`${link.path===pathname &&
                    "text-accent border-b-2 border-accent"}
                    capitalize font-medium hover:text-accent transition-all
                `}>
                    {link.name}
                </Link>
            );
        })}
      
    </nav>
  );
};

export default Nav
