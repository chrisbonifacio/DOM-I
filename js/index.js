const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const doc = document;

// Nav Bar
const nav = doc.querySelectorAll("nav a");
console.log(nav);

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

nav.forEach(e => {
  e.style.color = "green";
});

// Hero Section
// Hero Img
const ctaImg = doc.querySelector("#cta-img");
console.log(ctaImg);

ctaImg.src = siteContent["cta"]["img-src"];

// Hero Text
const ctaText = doc.querySelector(".cta-text");
const lineBreak = doc.createElement("br");
newCtaText = siteContent["cta"]["h1"].split(" ").splice(1, 0, lineBreak);

console.log(newCtaText);

ctaText.textContent = siteContent["cta"]["h1"];

ctaText.style.fontWeight = 600;
ctaText.style.fontFamily = "'Bangers', cursive";

// Call To Action
const ctaButton = doc.createElement("button");
ctaText.append(ctaButton);

ctaButton.textContent = siteContent["cta"]["button"];

// Content Section
// Features
const featuresHeader = doc.querySelector(
  ".top-content .text-content:nth-child(1) h4"
);
const featuresParagraph = doc.querySelector(
  ".top-content .text-content:nth-child(1) p"
);

featuresHeader.textContent = siteContent["main-content"]["features-h4"];

featuresParagraph.textContent = siteContent["main-content"]["features-content"];

// Middle Img
const middleImg = doc.querySelector(".middle-img");
middleImg.src = "../img/mid-page-accent.jpg";

// About
const aboutHeader = doc.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
const aboutParagraph = doc.querySelector(
  ".top-content .text-content:nth-child(2) p"
);

aboutHeader.textContent = siteContent["main-content"]["about-h4"];
aboutParagraph.textContent = siteContent["main-content"]["about-content"];

// Services
const servicesHeader = doc.querySelector(
  ".bottom-content .text-content:nth-child(1) h4"
);
const servicesParagraph = doc.querySelector(
  ".bottom-content .text-content:nth-child(1) p"
);

servicesHeader.textContent = siteContent["main-content"]["services-h4"];

servicesParagraph.textContent = siteContent["main-content"]["services-content"];

// Product
const productHeader = doc.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
const productParagraph = doc.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);

productHeader.textContent = siteContent["main-content"]["product-h4"];

productParagraph.textContent = siteContent["main-content"]["product-content"];

// Vision
const visionHeader = doc.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
const visionParagraph = doc.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);

visionHeader.textContent = siteContent["main-content"]["vision-h4"];

visionParagraph.textContent = siteContent["main-content"]["vision-content"];

// Contact
const contact = doc.querySelector(".contact");
const contactHeader = doc.querySelector(".contact h4");
const contactAddress = doc.querySelector(".contact p:first-of-type");
const contactPhone = doc.querySelector(".contact p:nth-of-type(2)");
const contactEmail = doc.querySelector(".contact p:nth-of-type(3)");

contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent["contact"]["address"];
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

// Footer

const footer = doc.querySelector("footer");
const footerParagraph = doc.querySelector("footer p");

footerParagraph.textContent = siteContent["footer"]["copyright"];

// Button Container
const buttons = doc.createElement("div");
const container = doc.querySelector(".container");

container.append(buttons);

buttons.classList.add("buttons");
buttons.style.display = "flex";
buttons.style.justifyContent = "center";
buttons.style.alignItems = "center";

console.log(buttons);

// Dark Mode Button
const darkModeButton = doc.createElement("button");
darkModeButton.textContent = "Dark Mode";
darkModeButton.style.color = "#fff";
darkModeButton.style.textTransform = "uppercase";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.fontWeight = 600;
darkModeButton.style.backgroundColor = "#121212";
darkModeButton.style.boxShadow =
  "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)";
darkModeButton.style.borderStyle = "none";
darkModeButton.style.borderRadius = "2px";
darkModeButton.style.padding = ".5em 1em";
darkModeButton.style.margin = "1em .5em";
darkModeButton.style.display = "inline-block";

buttons.append(darkModeButton);

function darkMode() {
  doc.body.style.backgroundColor = "rgb(60, 60, 60)";
  doc.body.style.color = "#fff";
  nav.forEach(e => {
    e.style.color = "yellow";
  });
}

darkModeButton.addEventListener("click", () => {
  darkMode();
});

// Light Mode Button
const lightModeButton = doc.createElement("button");
lightModeButton.textContent = "Light Mode";
lightModeButton.style.color = "#121212";
lightModeButton.style.textTransform = "uppercase";
lightModeButton.style.cursor = "pointer";
lightModeButton.style.fontWeight = 600;
lightModeButton.style.backgroundColor = "#fff";
lightModeButton.style.boxShadow =
  "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)";
lightModeButton.style.borderStyle = "none";
lightModeButton.style.borderRadius = "2px";
lightModeButton.style.padding = ".5em 1em";
lightModeButton.style.margin = "1em .5em";
lightModeButton.style.display = "inline-block";

buttons.append(lightModeButton);
function lightMode() {
  doc.body.style.backgroundColor = "#fff";
  doc.body.style.color = "#000";
  lightModeButton.style.backgroundColor = "#fff";
  lightModeButton.style.color = "#121212";
  nav.forEach(e => {
    e.style.color = "green";
  });
}

lightModeButton.addEventListener("click", () => {
  lightMode();
});
