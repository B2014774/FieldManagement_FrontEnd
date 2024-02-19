"use client";

import NavbarAvatarPreview from "./navBar";
import Breadcrumbs from "./breadcrumbs";

function Header() {
  return (
    <>
      <NavbarAvatarPreview></NavbarAvatarPreview>
      <div className="pt-6 pl-10">
        <Breadcrumbs></Breadcrumbs>
      </div>
    </>
  );
}

export default Header;
