<div align="center">

# Contact Form with Resend and React Email 📧

A modern contact form application built with Next.js 15, TypeScript, and various cutting-edge technologies.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Resend](https://img.shields.io/badge/Resend-FF4F64?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)
[![React Email](https://img.shields.io/badge/React_Email-3068B7?style=for-the-badge&logo=react&logoColor=white)](https://react.email/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## ✨ Features

<div align="center">

| Feature              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| 🎨 **Modern UI/UX**  | Beautiful and intuitive interface using Tailwind CSS |
| 🔒 **Email Sending** | Secure email sending with Resend and React Email     |
| 📱 **Responsive**    | Fully responsive design for all devices              |
| ✍️ **Contact Form**  | Easy-to-use contact form for user inquiries          |

</div>

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/contact-form-resend-react-email.git
cd contact-form-resend-react-email
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

```env
RESEND_API_KEY=your_resend_api_key
```

4. **Start the development server**

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

6. **Start React Email development server** (optional)

```bash
npm run email
```

This will start the React Email preview server at [http://localhost:3001](http://localhost:3001)

## 🛠️ Tech Stack

<details>
<summary>Click to expand tech stack details</summary>

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking

### Email Services

- **[Resend](https://resend.com/)** - Modern email delivery service
- **[React Email](https://react.email/)** - Email template builder for React

### Form Management

- **[React Hook Form](https://react-hook-form.com/)** - Form validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Next Safe Action](https://next-safe-action.dev/)** - Type-safe server actions

### UI Components & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful open-source icons

### Motion & Feedback

- **[Motion One](https://motion.dev/)** - Animation library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

</details>

## 📸 Screenshots

<div align="center">

### Contact Form

![Contact Form](/public/contact-form.png)

### Email Template

![Email Template](/public/react-email.png)

</div>

## 🔐 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable         | Description                      |
| ---------------- | -------------------------------- |
| `RESEND_API_KEY` | API key for Resend email service |

```
RESEND_API_KEY=
```
