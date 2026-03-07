# QuickHire - Setup & Running Guide

This is a React.js job portal application built with Vite and TypeScript. Follow these steps to get the project running after downloading from GitHub.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning the repository)
- **Backend API Server** - Laravel API running at `http://127.0.0.1:8000`

## Installation Steps

### 1. Clone or Download the Repository

```bash
# If using Git
git clone <your-github-repo-url>
cd QuickHire

# Or extract the downloaded ZIP file and navigate to the project folder
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages listed in `package.json`.

## Running the Project

### Development Server

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:

- Local: `http://localhost:5173/` (or the next available port if 5173 is in use)
- Network: Display in terminal output

The development server will automatically reload when you make changes to the code.

## API Configuration

This project fetches job data from a Laravel backend API. You need to have the API server running before using the application.

### API Endpoints

The application expects the following API endpoints:

- **GET** `http://127.0.0.1:8000/api/jobs`

**Expected Response Format:**

```json
{
  "status": true,
  "data": [
    {
      "id": 1,
      "title": "Job Title",
      "company": "Company Name",
      "location": "Location",
      "description": "Job Description",
      "is_featured": 0,
      "created_at": "2026-03-07T04:15:12.000000Z",
      "updated_at": "2026-03-07T04:15:12.000000Z",
      "categories": [
        {
          "id": 1,
          "name": "Category Name",
          "created_at": "2026-03-06T17:16:44.000000Z",
          "updated_at": "2026-03-06T17:16:44.000000Z",
          "pivot": {
            "job_post_id": 1,
            "category_id": 1
          }
        }
      ]
    }
  ]
}
```

### Setting Up the Backend (Laravel)

If you don't have the backend running:

1. Navigate to your Laravel project directory
2. Install dependencies:
   ```bash
   composer install
   ```
3. Create `.env` file from `.env.example` and configure the database
4. Run migrations:
   ```bash
   php artisan migrate
   ```
5. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

The API will be available at `http://127.0.0.1:8000/api/jobs`

## Project Structure

```
QuickHire/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main App component
│   │   └── components/             # Reusable components
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       └── figma/
│   │       └── ui/                 # UI components library
│   ├── imports/                    # Page components
│   │   ├── LandingPageFeaturedJobsDesktop.tsx
│   │   ├── LandingPageLatestJobOpenDesktop.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── styles/                     # CSS and styling
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── assets/                     # Static assets (images, etc.)
│   └── main.tsx                    # Entry point
├── package.json                    # Project dependencies
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── index.html                      # HTML template

```

## Key Features

### Featured Jobs Section

- Displays jobs where `is_featured = 1`
- Shows up to 7 jobs in a grid layout
- Uses static company logos

### Latest Jobs Section

- Displays non-featured jobs (excluding `is_featured = 1`)
- Sorted by creation date (newest first)
- Shows up to 8 jobs in a two-column layout

### Dynamic Data

- All job information is fetched from the API
- Job titles, companies, locations, and categories are populated dynamically
- Images use static logos as placeholders

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. The URL will be displayed in your terminal.

### API Connection Error

- Ensure the Laravel backend is running at `http://127.0.0.1:8000`
- Check that the database is properly configured and migrations are run
- Look for error messages in the browser console (F12 Developer Tools)

### Module Not Found Error

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Available Scripts

| Command       | Purpose                      |
| ------------- | ---------------------------- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start development server     |

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library

## Support

For issues or questions:

1. Check the browser console (F12) for error messages
2. Verify that both the frontend (npm dev) and backend (Laravel) are running
3. Check that the API is accessible at `http://127.0.0.1:8000/api/jobs`

## License

Check the LICENSE file for more information.
