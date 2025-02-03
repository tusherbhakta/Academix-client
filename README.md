# Academix

Academix is an innovative educational platform built using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline class management, facilitate student-teacher interaction, and improve learning experiences. Academix brings a user-friendly interface with various tools for both students and educators.

## Live Demo
[Click here to see the live website](https://academix-89443.web.app/)

## Admin Credentials
- **Username**: admin@admin.com
- **Password**: Admin123

## Key Features
1. **Responsive Design**: The website is fully responsive, providing a smooth experience across mobile, tablet, and desktop devices.
2. **Role-Based Access Control**: Different user roles including admin, teacher, and student, each with customized dashboards and access rights.
3. **Student Dashboard**: Students can enroll in classes, view assignments, and track their progress in a personalized dashboard.
4. **Teacher Dashboard**: Teachers can add new classes, track student enrollments, create assignments, and monitor class progress.
5. **Admin Dashboard**: Admins can approve/reject teacher applications, manage user roles, and oversee class approvals.
6. **Course Enrollment**: Students can browse and enroll in available classes and make payments securely.
7. **Feedback System**: Students can provide feedback for classes, and teachers can evaluate student performance.
8. **Teacher Application System**: Prospective teachers can apply to teach on the platform, and admins can approve/reject applications.
9. **Secure Authentication**: JWT-based authentication for secure login and session management. Google sign-in is also supported.
10. **Class Management**: Teachers and admins can manage class details, including pricing, description, enrollment counts, and assignments.

## Technologies Used
- **Frontend**:
  - React.js
  - React Router
  - Tailwind CSS (for styling)
  - Tanstack Query (for data fetching)
  - React Hook Form (for form management)
  - Framer Motion (for animations)
  - SweetAlert (for custom alerts and notifications)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for data storage)
  - JWT (for secure authentication)
  - Axios (for making HTTP requests)

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/academix.git
   ```

2. Navigate to the project directory:
   ```bash
   cd academix
   ```

3. Install dependencies for both the frontend and backend:
   - Frontend:
     ```bash
     cd client
     npm install
     ```

   - Backend:
     ```bash
     cd server
     npm install
     ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add your MongoDB credentials and JWT secret key.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the application in your browser at `http://localhost:3000`.

## Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
