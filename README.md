# Customer Profile App

A Node.js application for managing customer profiles with MongoDB.

## Features

- Create customer profiles with personal information and address
- List all customers
- View individual customer details
- Form validation (server-side and client-side)
- Responsive design

## Project Structure

```
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── customerController.js
│   ├── middleware/
│   │   └── validation.js
│   ├── models/
│   │   └── Customer.js
│   ├── routes/
│   │   └── customerRoutes.js
│   ├── views/
│   │   ├── customers/
│   │   │   ├── create.ejs
│   │   │   ├── list.ejs
│   │   │   └── view.ejs
│   │   ├── partials/
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── error.ejs
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v5 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd customer-profile-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/customer_db
   PORT=3000
   NODE_ENV=development
   ```

## Running the Application

### Development mode
```bash
npm run dev
```

### Production mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /customers | List all customers |
| GET | /customers/create | Display customer creation form |
| POST | /customers | Create a new customer |
| GET | /customers/:id | View a specific customer |

## Customer Schema

```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  dateOfBirth: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## License

ISC
