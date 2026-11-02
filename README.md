# Bella Bloom Florist Website

## Project overview
A responsive florist website built with HTML5, CSS3 and JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `products.html` — Products
- `enquiry.html` — Enquiry form
- `contact.html` — Contact details

## Folder structure
```text
MY WEBSITE DESIGN POE PART 2 WITH JAVASCRIPT/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── CHANGELOG.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

## JavaScript functionality
The shared `js/script.js` file is linked from every HTML page using:
`<script src="js/script.js" defer></script>`

It provides:
- Mobile navigation menu toggle.
- Product add-to-basket demonstration using browser localStorage.
- Basket item count in the navigation.
- Basic enquiry form validation and confirmation message.
- Automatic current year in the footer.

The enquiry form is front-end only. It does not send information to a business server. The basket is a demonstration and does not process orders or payments.

## Design
Dark green, white, soft pink and gold accents. Poppins is used for headings and Open Sans for body text.

## Images
Flower images are displayed from Unsplash URLs and therefore require an internet connection. The `images` folder is included for local images if you later download and add them.

## How to view
Open `index.html` in a modern browser. Internet access is required for the remote flower images and Google Fonts.

## Student information
Update these details before submitting:
- Student: [Your full name]
- Student number: [Your student number]
- Course: [Your course]
- Module: [Your module]
- Lecturer: [Lecturer name]
- Institution: [Institution name]


## Part 3: Functionality and SEO
- JavaScript is linked on every HTML page through `js/script.js`.
- Mobile navigation menu opens and closes on small screens.
- Product cards include add-to-basket buttons; the basket count is stored in browser localStorage.
- The enquiry form uses HTML required fields and JavaScript client-side validation for email and phone number formats.
- Scroll-reveal animations and hover effects add subtle movement. Reduced-motion preferences are respected.
- Each page has a unique title, meta description, keywords and robots meta tag.
- Images include descriptive alt text.
- The Contact page embeds a Google Maps view for Premium Towers, Floor 5, Room 518, Pretoria.
- A JavaScript-powered Get Directions button opens Google Maps directions to the shop.
- The footer on every page displays the shop address and clickable phone number +27 73 631 8450.

## Important limitations
The enquiry form is a front-end demonstration and does not send information to a server or email address. The basket does not process orders or payments. The map and directions use the shop location supplied for this project: Premium Towers, Floor 5, Room 518, Pretoria. Flower images and Google Fonts are externally hosted and need an internet connection.
