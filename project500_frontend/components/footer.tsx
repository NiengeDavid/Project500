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
            href="https://flowbite.com"
            src={Logo}
            alt="Project500 Logo"
            name="Project500"
          />
          <FooterLinkGroup>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">X(Twitter)</FooterLink>
            <FooterLink href="#">Threads</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="border-zinc-950" />
        <FooterCopyright by="Project 500™" year={2024} />
      </div>
    </Footer>
  );
}
