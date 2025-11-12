# Library Management System

A modern, full-stack library management application built with React and Node.js, featuring a beautiful UI/UX design and comprehensive book management capabilities.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with gradient backgrounds and smooth animations
- **Book Management**: Add, view, and organize books with categories
- **User Authentication**: Secure user accounts and profiles
- **Search & Filter**: Find books quickly with advanced search functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Dynamic content updates without page refresh

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API requests
- **Custom Hooks** - Reusable logic for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT Authentication** - Secure token-based authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database

### Frontend Setup
```bash
# Clone the repository
git clone <repository-url>
cd Library-management

# Install dependencies
npm install

# Install axios for API calls
npm install axios

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start backend server
npm run dev
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the Backend directory:

```env
DATABASE_URL="your-database-connection-string"
PORT=3000
```

### Database Setup
1. Start your PostgreSQL database
2. Update the `DATABASE_URL` in your `.env` file
3. Create your database tables as needed

## 🚦 Getting Started

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm run dev
   ```

2. **Start the Frontend Application**
   ```bash
   npm start
   ```

3. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:3000/api`

## 📱 Usage

### Adding a New Book
1. Navigate to the "Create" page
2. Fill in the book title and description
3. Add relevant categories
4. Click "Create Book" to save

### Browsing Books
1. Visit the "Books" page to view all books
2. Use the search functionality to find specific books
3. Filter by categories for better organization

### User Management
1. Create an account or log in
2. Access your profile through the user menu
3. Manage your book collection and preferences

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue-to-indigo gradients
- **Glass Morphism**: Modern frosted glass effects
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **Consistent Typography**: Professional font hierarchy
- **Interactive Elements**: Engaging buttons and form controls

## 📂 Project Structure

```
Library-management/
├── src/
│   ├── components/
│   │   ├── navigation.jsx
│   │   ├── dropdown.jsx
│   │   └── homedesign.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Create.jsx
│   │   └── Books.jsx
│   ├── hooks/
│   │   └── usefetch.js
│   └── assets/
├── Backend/
│   ├── routes/
│   ├── .env
│   └── index.js
└── README.md
```

## 🔗 API Endpoints

### Books
- `GET /books` - Get all books
- `POST /books` - Create a new book
- `GET /books/:id` - Get book by ID
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book

### Users
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


### Frontend Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for port conflicts (default: 3000)

### Backend Server Issues
- Verify all dependencies are installed
- Check if port 3000 is available
- Ensure database connection is working


