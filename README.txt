PIXLA GOLD — Separated HTML pages, minimal JavaScript

Files:
- index.html   Home page (all sections in HTML)
- redeem.html  Redeem catalogue (9 static HTML product cards)
- profile.html Profile and About page
- style.css    Main stylesheet
- pages.css    Page-specific and mobile fixes
- common.js    Tiny mobile menu behavior
- home.js      Small home interactions
- redeem.js    Search/category filter for existing HTML cards
- profile.js  Small local demo profile editing

Header update:
- Removed the announcement/promo strip above the navbar from Home, Redeem, and Profile.
- Kept the same class and ID naming pattern across all pages so the existing CSS and JavaScript continue to work.

Mobile card fix:
On phones, the product grid is one column and each card is width: 100%.

Native HTML media:
- Creator feed cards use <img>.
- Video preview uses <video controls><source ...></video>.
- Redeem cards use <img class="product-img">.

Run:
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open index.html with Live Server.
4. Header links open separate HTML files.

This is frontend-only. Login/signup, secure profile data, uploads, real coin earning, and real gold/jewellery fulfilment are not connected. Coin values and sample products are illustrative.


Naming style update:
- Common classes now use simple names such as .header, .navbar, .navbar-link, .hero, .product-card, .product-img and .footer.
- IDs use lowercase kebab-case such as #mobile-menu, #product-grid, #product-search and #profile-name.
- HTML, CSS and JavaScript selectors were updated together.
- Promotional strip above the navbar remains removed.
