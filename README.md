# ChatApp

ChatApp is a real-time web-based messaging application built with React, Node.js, MongoDB, and Socket.IO. It enables users to create accounts, manage contacts, and engage in seamless one-on-one or group conversations with a modern, responsive interface. Key features include real-time message updates, user authentication, and an admin panel for managing conversations.

## License

This project is licensed under the [MIT License](LICENSE). The MIT License is chosen for its permissiveness, allowing broad adoption and modification while encouraging community contributions with minimal restrictions.

## Installation

To set up ChatApp locally, ensure you have [Node.js](https://nodejs.org/) (v16 or higher), [MongoDB](https://www.mongodb.com/), and [Git](https://git-scm.com/) installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/Edmon02/chatapp.git
   cd chatapp
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Install socket dependencies:
   ```bash
   cd ../socket
   npm install
   ```

5. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```

6. Start the MongoDB server locally or use a cloud provider like MongoDB Atlas.

7. Run the backend server:
   ```bash
   cd backend
   npm start
   ```

8. Run the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

9. Run the Socket.IO server:
   ```bash
   cd socket
   npm start
   ```

10. Open your browser and navigate to `http://localhost:3000` to access the app.

## Getting Started

1. **Sign Up/Login**: Create an account or log in using the login page.
2. **Add Contacts**: Navigate to the contacts section to add users by their username or email.
3. **Start Chatting**: Select a contact or conversation from the "All Chats" panel to send messages in real-time.
4. **Admin Features**: If you have admin access, use the admin panel to manage users and conversations.

For a quick demo, use the default credentials (if set up) or create a new user to explore the interface.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request with a clear description of your changes.

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) and check the [issue tracker](https://github.com/your-username/chatapp/issues) for open tasks.

## Contact

For questions, suggestions, or issues:
- File an issue on the [GitHub issue tracker](https://github.com/Edmon02/chatapp/issues).
- Join the discussion in our [GitHub Discussions](https://github.com/Edmon02/chatapp/discussions).
- Reach out via email: edmon.sahakyan@gmail.com.

Follow the project on GitHub for updates and new releases!
