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

const initDatabase = async () => {
    try {
        const connection = await db.getConnection();
        console.log("✅ Database connection successful!");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`module\` (
              \`id\` int(11) NOT NULL AUTO_INCREMENT,
              \`moduleName\` varchar(255) NOT NULL,
              \`moduleCode\` varchar(50) NOT NULL,
              \`moduleTrainer\` varchar(255) NOT NULL,
              \`createAt\` timestamp NOT NULL DEFAULT current_timestamp(),
              \`updateAt\` datetime DEFAULT current_timestamp(),
              \`moduleDescription\` text DEFAULT NULL,
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`users\` (
              \`id\` int(11) NOT NULL AUTO_INCREMENT,
              \`fName\` varchar(50) NOT NULL,
              \`sName\` varchar(50) NOT NULL,
              \`email\` varchar(255) NOT NULL,
              \`phoneNumber\` int(15) NOT NULL,
              \`role\` enum('ADMIN','TRAINER','STUDENT','PARENT') NOT NULL DEFAULT 'STUDENT',
              \`password_hashed\` varchar(255) NOT NULL,
              PRIMARY KEY (\`id\`),
              UNIQUE KEY \`email\` (\`email\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

      
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`user_accounts\` (
              \`id\` int(11) NOT NULL AUTO_INCREMENT,
              \`firstName\` varchar(100) NOT NULL,
              \`secondName\` varchar(100) NOT NULL,
              \`phoneNumber\` int(15) NOT NULL,
              \`email\` varchar(255) NOT NULL,
              PRIMARY KEY (\`id\`),
              UNIQUE KEY \`phoneNumber\` (\`phoneNumber\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        console.log("✅ All tables verified/created successfully!");
        connection.release(); 
    } catch (error) {
        console.error("⛔ Database initialization failed:", error.message);
    }
};


initDatabase();

export default db;
