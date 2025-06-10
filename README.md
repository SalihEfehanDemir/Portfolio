# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a dark theme, smooth animations, and Supabase integration for contact form submissions.

## 🚀 Features

- **Modern Design**: Clean, dark-themed UI with smooth animations using Framer Motion
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Sections**:
  - Hero section with animated background elements
  - About section with social links
  - Skills showcase with technology cards
  - Projects portfolio with demo/GitHub links
  - Contact form with Supabase integration
- **Smooth Navigation**: Scroll-to-section navigation with mobile hamburger menu
- **Performance Optimized**: Built with Vite for fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Deployment**: Vercel (configured)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account (for contact form)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `env.example` to `.env`
   - Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   - Create a new table called `messages` with the following columns:
     - `id` (int8, primary key, auto-increment)
     - `name` (text)
     - `email` (text)
     - `message` (text)
     - `created_at` (timestamptz)

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🗄️ Supabase Setup

1. Go to [Supabase](https://supabase.com) and create a new project
2. In the SQL Editor, run this query to create the messages table:

```sql
CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

3. Go to Settings > API to get your URL and anon key
4. Add these to your `.env` file

## 🎨 Customization

### Personal Information
Edit the following files to customize with your information:
- `src/components/Hero.jsx` - Name and tagline
- `src/components/About.jsx` - Bio and social links
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

### Styling
- Modify `tailwind.config.js` for custom colors/fonts
- Edit `src/index.css` for additional styles
- Update component classes for styling changes

### Skills
Update the skills array in `src/components/Skills.jsx` with your technologies.

## 📱 Sections

1. **Hero**: Full-screen introduction with call-to-action
2. **About**: Personal bio with social links
3. **Skills**: Technology showcase grid
4. **Projects**: Portfolio with project cards
5. **Contact**: Contact form with Supabase integration

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Build
```bash
npm run build
npm run preview
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, Tailwind CSS, and Vite 