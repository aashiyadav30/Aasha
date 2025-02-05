# Aasha

---

# 🚔 Crime Reporting and Support Platform  

A web-based platform for users to report crimes, seek legal support, and access emergency assistance. It also provides an admin panel for law enforcement to manage reports and analyze crime trends.

## 📌 Features  

### 🔹 User Features  
- *User Registration & Login* (Signup, Login, Forgot Password)  
- *Crime Report Submission* (Detailed form for users to report incidents)  
- *Report Tracking* (Users can check the status of their reports)  
- *Legal Support* (Access legal resources and advisors)  
- *Emergency Services* (Quick access to emergency contacts)  

### 🔹 Admin Features  
- *Admin Dashboard* (Overview of reports, statistics, and user activities)  
- *Crime Insights* (Visual analytics on reported crimes)  
- *Report Management* (Review, update, and categorize reports)  

## 🏗 Project Structure  


📂 views/
│── admin_dashboard.ejs      # Admin Panel
│── admin_login.ejs          # Admin Login
│── dashboard.ejs            # User Dashboard
│── emergency.ejs            # Emergency Contact Page
│── forget-password.ejs      # Password Recovery
│── form.ejs                 # Crime Reporting Form
│── home.ejs                 # Landing Page
│── index.ejs                # Main Index Page
│── insights.ejs             # Crime Analytics
│── legal-support.ejs        # Legal Assistance Page
│── report.ejs               # Crime Report Page
│── signup.ejs               # User Signup
│── userlogin.ejs            # User Login

📂 public/
│── heatmap.csv              # Data for heatmap visualization
│── images/                  # Static image assets
│── js/
│   └── login.js             # Login page interactions
│── css/
│   ├── home.css             # Home page styles
│   └── login.css            # Login page styles
│── css1/
│   ├── dashboard.css        # Dashboard styling
│   ├── emergency.css        # Emergency page styles
│   ├── forgot-password.css  # Forgot password page styling
│   ├── form.css             # Crime report form styling
│   └── legal-support.css    # Legal support page styling


## ⚡ Tech Stack  
- *Backend:* Node.js, Express.js  
- *Frontend:* EJS, CSS, JavaScript  
- *Database:* PostgreSQL  
- *Authentication:* Sessions, bcrypt for password hashing  

## 🚀 Setup & Installation  

1. Clone the repository:  
   sh
   git clone https://github.com/your-repo/crime-reporting-platform.git
   cd crime-reporting-platform
   
2. Install dependencies:  
   sh
   npm install
   
3. Set up PostgreSQL and configure the database in db.js.  
4. Run the server:  
   sh
   npm start
   
5. Open in the browser:  
   
   http://localhost:3000
   

## 🛠 Future Enhancements  
- *Real-time Notifications* for report status updates  
- *Two-Factor Authentication* for added security  
- *AI-Powered Crime Predictions* using data analysis  

---
