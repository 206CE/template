LAYOUT.tsx

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

<Seo 1.0.0>

<header>
 logo *
 <NavBar 1.0.0>
 <MobileMenu 1.0.0>
 [login {Search,CTA,login,etc.}] *
</header>

<footer>
 [cta] *
 [leftbottom]
 <Social 1.0.0>
 [rightbottom] 
 copywrite *
</footer>

HOME.tsx:

<section>
 hero *
</section>
<main>
 about
 services
 contact
</main>

ABOUT.tsx

<section>
 <Team 1.0.0>
</section>
<section>
 story
<section>

SERVICE.tsx
<section>
 Description *
</section>
<section>
 Explanation
</section>

TESTIMONIES.tsx
<section>
 testimonycards *
</section>

RESOURCES.tsx
<section>
 type1 *
</section>
<section>
 type2
</section>
<section>
 type3
</section>

CONTACT.tsx
<section>
 <ContactF 1.0.0>
</section>