import mysql from 'mysql2/promise'; 
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "huguka_e_learning",
  
}); 


try {
    const connection = await db.getConnection();
    console.log("✅ Database connection successful!");
    connection.release(); // Important: release it back to the pool
} catch (error) {
    console.error("⛔ Database connection failed:", error.message);
}

export default db;
