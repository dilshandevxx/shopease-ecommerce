# ShopEase – Modern E-Commerce (AliExpress-inspired)

A modern, responsive e-commerce frontend built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

Inspired by AliExpress layout patterns: product grid, flash deals, categories, product detail pages, and client-side cart.

## Features

- 🏠 Homepage with hero, trust badges, flash deals & recommended products
- 📂 Category browsing
- 📦 Product detail pages with image gallery, specs, quantity selector
- 🛒 Client-side cart (localStorage) with quantity controls
- 📱 Fully responsive design
- ⚡ Next.js App Router + TypeScript + Tailwind CSS v4

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── product/[id]/         # Product detail
│   ├── category/[slug]/      # Category listing
│   └── cart/                 # Shopping cart
├── components/               # Header, ProductCard, Footer, etc.
├── data/products.ts          # Mock product data
└── lib/utils.ts              # Helpers
```

## Notes

This is a **frontend demo**. There is no backend, authentication, or real payments.
Checkout button is non-functional by design.

Feel free to extend it with:
- Real search
- Auth (NextAuth / Clerk)
- Backend (tRPC / API routes + database)
- Stripe / payment integration
- Admin dashboard

Built for learning and portfolio purposes.
