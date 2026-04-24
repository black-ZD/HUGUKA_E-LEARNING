import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());

app.use(
  cors({
    origin: "https://huguka-e-learning.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.options("", cors());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running successfully",
  });
});

app.post("/module", async (req, res) => {
  try {
    const {
      moduleName,
      moduleCode,
      moduleTrainer,
      moduleDescription,
    } = req.body;

    if (!moduleName || !moduleCode) {
      return res.status(400).json({
        success: false,
        message: "moduleName and moduleCode are required",
      });
    }

    const sql = `
      INSERT INTO module 
      (moduleName, moduleCode, moduleTrainer, createAt, updateAt, moduleDescription)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?)
    `;

    const [result] = await db.execute(sql, [
      moduleName,
      moduleCode,
      moduleTrainer,
      moduleDescription,
    ]);

    res.status(201).json({
      success: true,
      message: "Module created successfully",
      data: {
        id: result.insertId,
        moduleName,
        moduleCode,
        moduleTrainer,
        moduleDescription,
      },
    });
  } catch (error) {
    console.error("POST /module error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create module",
    });
  }
});


app.get("/module", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM module ORDER BY createAt DESC"
    );

    res.json({
      success: true,
      message: "module fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error("GET /module error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch module",
    });
  }
});


app.put("/module/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      moduleName,
      moduleCode,
      moduleTrainer,
      moduleDescription,
    } = req.body;

    if (!moduleName || !moduleCode) {
      return res.status(400).json({
        success: false,
        message: "moduleName and moduleCode are required",
      });
    }

    const sql = `
      UPDATE module
      SET moduleName = ?, moduleCode = ?, moduleTrainer = ?, moduleDescription = ?, updateAt = NOW()
      WHERE id = ?
    `;

    const [result] = await db.query(sql, [
      moduleName,
      moduleCode,
      moduleTrainer,
      moduleDescription,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Module not found",
      });
    }

    res.json({
      success: true,
      message: "Module updated successfully",
    });
  } catch (err) {
    console.error("PUT /module error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.delete('/module/:id', async (req, res) => {
  try {
    const { id } = req.params;

  
  
    const [result] = await db.execute('DELETE FROM module WHERE id = ?', [id]);


    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Module not found" });
    }

    
    if (req.user) {
      await audit(req.user.id, 'DELETE', 'module', id, { id });
    }

    res.json({ success: true, message: "Module deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${port}`);
});