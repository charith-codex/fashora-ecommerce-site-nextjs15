# Fashora - Full-Stack E-commerce Website

Welcome to Fashora, a full-stack e-commerce platform built with the latest web technologies. This project showcases a modern, feature-rich online store, created as part of an in-depth exploration of the Next.js framework.

## 🚀 Description

This project is a complete e-commerce solution built with Next.js 15. It demonstrates the power of server-side rendering, reusable component architecture, and secure payment integrations to create a seamless shopping experience. The platform includes everything from dynamic product pages and user authentication to a comprehensive admin dashboard for managing the store.

## ✨ Features

* **Server-Side Rendering (SSR):** Fast initial page loads and improved SEO using Next.js App Router.
* **Dynamic Product Pages:** Easily manage and display a wide range of products.
* **Reusable Components:** A modular and maintainable frontend built with React 19.
* **User Authentication:** Secure user sign-up and login functionality with NextAuth.js.
* **Admin Dashboard:** A dedicated interface for store administrators to manage products, orders, and users.
* **Secure Payment Processing:** Integrated with both **PayPal** and **Stripe** for reliable transactions.
* **Shopping Cart & Order Management:** A complete system for users to add items to their cart and track their orders.
* **Data Visualization:** Interactive charts in the admin dashboard using Recharts.
* **File Uploads:** Simple and efficient file handling with Uploadthing.

## 🧰 Tech Stack

| Category          | Technology                                           |
| ----------------- | ---------------------------------------------------- |
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN UI |
| **Backend** | PostgreSQL, Prisma ORM                               |
| **Authentication**| NextAuth.js                                          |
| **Form Handling** | React Hook Form, Zod                                 |
| **Payments** | Stripe, PayPal                                       |
| **Testing** | Jest                                                 |
| **Data Viz** | Recharts                                             |
| **File Uploads** | Uploadthing                                          |


## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* npm
* PostgreSQL database

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/charith-codex/fashora-ecommerce-site-nextjs15.git](https://github.com/charith-codex/fashora-ecommerce-site-nextjs15.git)
    cd fashora-ecommerce-site-nextjs15
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env` file in the root of the project and add the necessary environment variables for your database connection, NextAuth, Stripe, and PayPal API keys.
    ```env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    NEXTAUTH_SECRET="..."
    STRIPE_SECRET_KEY="..."
    PAYPAL_CLIENT_ID="..."
    # Add other variables as needed
    ```

4.  **Push the database schema:**
    ```sh
    npx prisma db push
    ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.
