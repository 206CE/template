npx create-next-app@latest --example "https://github.com/.../" [your-project-name]


LAYOUT.tsx

Font?

title?
description?
keywords?
author?
image?=default_og.png (1200x630)
url?

favicon.ico=logo.png (192x192)

?Logo=logo.png

items = [{label: "",href:""},{label: "", Dropdown: [{label: "", href: "" },etc]}]

?Login

?Search

?Notifications

?CTASmall

?CTA Horizontal

?

social = ["urls",""]

?

?Copywrite


<Seo 1.0.0>

<header>
 [logo]
 <NavBar 1.0.0>
 <MobileMenu 1.0.0>
 [login]
 [search]
 [cta]
</header>

<footer>
 [cta]
 [leftbottom]
 <Social 1.0.0>
 [rightbottom] 
 [copywrite]
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