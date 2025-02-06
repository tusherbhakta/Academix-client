![Academix](https://i.ibb.co/9H6DXMmV/image.png)
<img src="https://i.ibb.co/9H6DXMmV/image.png">

# Academix
Academix is an innovative educational platform built using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline class management, facilitate student-teacher interaction, and improve learning experiences. Academix brings a user-friendly interface with various tools for both students and educators.

## Live Demo
[Click here](https://academix-89443.web.app/) to see the live website.

## Admin Credentials
**Username:** admin@admin.com  
**Password:** Admin123

## Key Features
- **Responsive Design:** The website is fully responsive, providing a smooth experience across mobile, tablet, and desktop devices.
- **Role-Based Access Control:** Different user roles including admin, teacher, and student, each with customized dashboards and access rights.
- **Student Dashboard:** Students can enroll in classes, view assignments, and track their progress in a personalized dashboard.
- **Teacher Dashboard:** Teachers can add new classes, track student enrollments, create assignments, and monitor class progress.
- **Admin Dashboard:** Admins can approve/reject teacher applications, manage user roles, and oversee class approvals.
- **Course Enrollment:** Students can browse and enroll in available classes and make payments securely.
- **Feedback System:** Students can provide feedback for classes, and teachers can evaluate student performance.
- **Teacher Application System:** Prospective teachers can apply to teach on the platform, and admins can approve/reject applications.
- **Secure Authentication:** JWT-based authentication for secure login and session management. Google sign-in is also supported.
- **Class Management:** Teachers and admins can manage class details, including pricing, description, enrollment counts, and assignments.

## Technologies Used
### Frontend:
- React.js
- React Router
- Tailwind CSS (for styling)
- Tanstack Query (for data fetching)
- React Hook Form (for form management)
- Framer Motion (for animations)
- SweetAlert (for custom alerts and notifications)

### Backend:
- Node.js
- Express.js
- MongoDB (for data storage)
- JWT (for secure authentication)
- Axios (for making HTTP requests)

## Installation Instructions
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/academix.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd academix
   ```
3. **Install dependencies for both the frontend and backend:**
   
   **Frontend:**
   ```sh
   cd client
   npm install
   ```
   **Backend:**
   ```sh
   cd server
   npm install
   ```
4. **Set up environment variables:**
   - Create a `.env` file in the `server` directory.
   - Add your MongoDB credentials and JWT secret key.
5. **Start the development server:**
   ```sh
   npm run dev
   ```
6. **Open the application in your browser at** [http://localhost:3000](http://localhost:3000).

## Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

