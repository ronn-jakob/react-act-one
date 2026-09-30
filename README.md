# Project Title: DIGISHOP - Digital Top-up Shop
__Student Name: Viquiera, Ronn Jakob S.__ 

__Section: BSIT 3DG1__

__Website Description:__  A digital top-up website for Mobile Legends: Bang Bang Diamonds and Valorant Points. Users can browse products, switch between English and Filipino, toggle dark mode, add items to a cart, checkout, and submit their order information.

__Technologies Used:__ 

![HTML](https://img.shields.io/badge/HTML-white)
![ReactJS](https://img.shields.io/badge/ReactJS-vite-orange)
![Tailwind.css](https://img.shields.io/badge/Tailwind.css-blue)
![Firebase](https://img.shields.io/badge/Firebase-orange)

## Features:

__useState() Features:__
1. Toggles between dark mode and light mode. (const [darkMode, setDarkMode] = useState(true);)
2. Switches the website language between English and Filipino. (const [lang, setLang] = useState("en");)
3. Selects between Mobile Legends and Valorant product categories. (const [category, setCategory] = useState("mlbb");)
4. Opens and closes the mobile navigation menu. (const [mobileNavOpen, setMobileNavOpen] = useState(false);)
5. Manages the selected game category, cart items, checkout visibility, and product quantities. (const [cartItems, setCartItems] = useState([]); const [cartOpen, setCartOpen] = useState(false);)
6. Stores checkout information and payment states, including processing, success, and error messages. (const [showCheckout, setShowCheckout] = useState(false);)
7. Stores and updates the customer’s email and phone number. (const [contact, setContact] = useState({ email: "", phone: "" });)
8. Tracks whether the payment/order submission is currently processing.(const [paymentSubmitted, setPaymentSubmitted] = useState(false); const [paymentError, setPaymentError] = useState(false);)
9. Displays success or error messages after the order submission.(const [isPaying, setIsPaying] = useState(false);)

__useEffect() Features:__
1. Adds or removes the dark mode class from the website.
2. Updates the page language.

## Challenges and Fixes

__Challenges Encountered:__  
One of the main challenges encountered during development was making the website responsive across different screen sizes. Other challenges included implementing the dark and light mode switch, creating smooth navigation between sections, organizing reusable components, and displaying images and icons correctly. And lastly, I got challenged to keep the cart synchronized with Firebase Firestore.

__How I Solved Them:__  
I solved these challenges by using `Tailwind CSS` responsive utilities, flexible layouts, and breakpoint classes. I used React `useState()` and `useEffect()` to manage the theme and language settings, separated reusable elements into components, and used smooth scrolling with section IDs. I also checked the website at different viewport sizes to identify and fix layout and overflow issues. And I used Firebase Firestore functions such as `addDoc`, `updateDoc`, `deleteDoc`, and `writeBatch` for cart and order operations.
