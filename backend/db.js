import mysql from 'mysql2/promise'; 
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
   
    host: process.env.DB_HOST || "a6grk6.h.filess.io",
    port: process.env.DB_PORT || 61002,
    user: process.env.DB_USER || "Huguka_e_learningDB_trickbirds",
    password: process.env.DB_PASSWORD || "9e928aa3b30a8b2cc6958a89abfb2196300bfdaf",
    database: process.env.DB_NAME || "Huguka_e_learningDB_trickbirds",
    
   
    waitForConnections: true,
    connectionLimit: 5, 
    queueLimit: 0
}); 

try {
    const connection = await db.getConnection();
    console.log("✅ Database connection successful!");
    connection.release(); 
} catch (error) {
    console.error("⛔ Database connection failed:", error.message);
}

export default db;
