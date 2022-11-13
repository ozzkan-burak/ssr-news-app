import Link from "next/link";
import React from "react";

const Nav = () => {
  <div className="my-nav">
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/blogs"><a>Blogs</a></Link>
    <link href="/news"><a>News</a></link>
  </div>
};

export default Nav;