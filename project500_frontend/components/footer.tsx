import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const Logo = "/assets/TestLogo.png"

export function FooterDemo() {
  return (
    <Footer container className="bg-zinc-200">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="/"
            src={Logo}
            alt="Project500 Logo"
            name="Project500"
          />
          <FooterLinkGroup>
            <FooterLink href="https://www.facebook.com/profile.php?id=61563840127348&mibextid=kFxxJD">Facebook</FooterLink>
            <FooterLink href="https://www.instagram.com/dyslexiaprojectafrica?igsh=MW53aHZkbWJuMms3eg%3D%3D&utm_source=qr">Instagram</FooterLink>
            <FooterLink href="https://x.com/DyslexiaProjAfr?t=WZyQ-aW0U7AHhv97yfhMMQ&s=09">X(Twitter)</FooterLink>
            {/* <FooterLink href="#">Threads</FooterLink> */}
          </FooterLinkGroup>
        </div>
        <FooterDivider className="border-zinc-950" />
        <FooterCopyright by="Project 500™" year={2024} />
      </div>
    </Footer>
  );
}
