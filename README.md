[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8ed1f6bf8ea84172bc1f51d70590abf3)](https://app.codacy.com/gh/Kaungsett45/TheBOOK/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

##LINK for database diagram

https://dbdiagram.io/d/68e4bd8ad2b621e422990589



# Library Management System
A modern, full-stack library management application built with React and Node.js, featuring a beautiful UI/UX design and comprehensive book management capabilities.

## 🚀 Features  ( writing down idea ) 

Add / Edit / Delete Books
Title, Author, ISBN, Genre, Year, Description.

Search & Filter
By author, title, or category.

User Authentication (done)
Login/Register with password hashing (using bcrypt & JWT).

View Count Tracking
Each time someone views a book detail, increment “views.”

Tagging System
Each book can have multiple tags (like “Fantasy”, “Self-Help”).

Notification System
Send in-app notifications when:
A new book by a favorite author is added.
Someone reacts to their review.

Reading Progress Tracker
Users can mark:
“Want to Read"
“Currently Reading”
“Finished”


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
- Ensure database migrations are up to date






