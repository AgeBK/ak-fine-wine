# NextJS + React + RTK + TypeScript

## About

I originally built this mock e-commerce style website from a JSON file I found online which contains retail wine store data with accompanying images. After I completed that, I transformed the JSON data into a db script and inserted the data into a Postgres database at Vercel.com

Here's a link to preview the site: <a target="_blank" href="https://ak-fine-wines-ts.netlify.app/">AK Fine Wines</a>

Here's a link to the JavaScript version code base: <a target="_blank" href="https://github.com/AgeBK/ak-fine-wines">GitHub</a>

I wrote all of the code (JS/CSS/HTML) myself, none of it has been copied (I used the MUI Autocomplete Component for the search).

## Description

I've included a Search bar using MUI Autocomplete. The site also makes use of 2 custom hooks. For styling, it's using Flexbox via CSS modules. The site also includes loading, not found and error components. Responsive design techniques have been taken into account, the site should present nicely on mobile and desktop. I have used semantic HTML, compressed the product images and taken accessibility and SEO into consideration. The site scores high 90's and 100's in lighthouse testing and I have extensive lint rules in place as well.

I have also built an admin panel portal where products on the site can be managed (CRUD operations) which includes the ability to upload images.

The site uses NextAuth for authentication where a user can be logged in (this is a requirement to access the admin panel in the site)

The site uses a Postgres database hosted by Vercel with all of the products for the site. Various calls are made to the db for fetching data displayed throughout the site. Examples are

- fetch by wine category
- fetch by wine category and variety
- fetch by products 10% off
- fetch by products 2 for deals
- and many more

I've built a shopping cart as well which you can add products to. The cart uses RTK which can be accessed anywhere in the site. You can increase and decrease amounts and enter a correct discount code. Calculations are automatically made in the cart for a variety of discounts that apply to a range of many products (2 for $XX, 10 for $100, 10% off when code is entered etc) The idea being that the user can have a simulated on-line shopping experience.

## Features

- Authorisiation
- Login and sign up
- Admin panel where CRUD operations can be performed for products
- Over 1600 products
- Over 70 components
- Search bar (MUI auto complete)
- Shopping cart
- Responsive carousel
- Multiple filters (price, rating, variety, region, (search by id and name also in admin))
- Dynamic header/blurb on Category page (variety change)
- Sorting (alphabetical, price, sale items)
- Paging
- Items per page selector

## Performance

- Scores high 90-100 in all aspects of lighthouse report

## Pages.

The <b>home</b> page lists the specials that the site has to offer, similar to what you'd see online, it's basically a navigation page/entry point for the current specials and the other 2 pages.

The <b>category</b> page lists all the products for a particular category of wines depending what URL you come in on. eg: red, white, 10% off and many more. The wines displayed can be filtered, sorted, items per page can be adjusted.

The <b>product</b> page displays all the details about an individual product.

## Admin Pages.

The <b>manage</b> landing page displays a list of all the products in the database. Actions such as add/edit/delete product can be performed here. This page is similar to the category page which has paging, filtering and sorting. It also has search by id and name.

The <b>manage</b> product page displays different views of which ever action you'd like to perform (add/edit/delete). Each field available from the database is displayed as well as the product image. If you choose to delete a product, a confirmation modal is displayed.

<a target="_blank" href="https://ak-fine-wine.vercel.app/manage">Link to admin</a>
