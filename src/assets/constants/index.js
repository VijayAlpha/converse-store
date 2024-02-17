import {
  facebook,
  instagram,
  shieldTick,
  support,
  twitterLogo,
  twitter,
} from "../icons";
import {
  artWork5,
  artWork6,
  artWork2,
  artWork3,
  artWork11,
  artWork9,
  customer1,
  customer2,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "Story" },
  { href: "#products", label: "Collection" },
  { href: "#contact-us", label: "Join Us" },
];

export const artworks = [
  {
    thumbnail: artWork5,
    bigShoe: artWork5,
  },
  {
    thumbnail: artWork2,
    bigShoe: artWork2,
  },
  {
    thumbnail: artWork3,
    bigShoe: artWork3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: artWork6,
    name: "FOD: Baicam",
    price: "100.20 €",
  },
  {
    imgURL: artWork11,
    name: "FOD: Rucho",
    price: "190.00 €",
  },
  {
    imgURL: artWork9,
    name: "FOD: Babirus",
    price: "120.20 €",
  },
  {
    imgURL: artWork2,
    name: "L-O-P-E 1211",
    price: "130.00 €",
  },
];

export const services = [
  {
    imgURL: twitterLogo,
    label: "Follow",
    subtext: "Follow Future of Dawn and CoinEx on Twitter. ",
  },
  {
    imgURL: shieldTick,
    label: "Join WhiteList",
    subtext: "Fill in the relevant information on the white list.",
  },
  {
    imgURL: support,
    label: "Finally",
    subtext:
      "Wait for OneSwap audit notification on public display & sale of NFT.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Chuck Taylor All Star", link: "/" },
      { name: "Run Star Hike Platform", link: "/" },
      { name: "Chuck 70 Tri-Color", link: "/" },
      { name: "Star Player 76", link: "/" },
      { name: "Chuck Taylor All Star Lift Platform", link: "/" },
      { name: "Run Star Legacy Chelsea CX", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@converse.com", link: "mailto:customer@converse.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/TheCoinEx",
  },
  {
    src: twitter,
    alt: "twitter logo",
    link: "https://twitter.com/coinexcom",
  },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/coinexcom/",
  },
];
