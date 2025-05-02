import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./auth";
import adminRoutes from "./admin-routes";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  setupAuth(app);

  // Contact form endpoint (public)
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  // Public API endpoints for portfolio data
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Error fetching projects" });
    }
  });

  app.get("/api/blogs", async (req, res) => {
    try {
      // For public API, only return published blogs
      const blogs = await storage.getBlogs(false);
      res.json(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ message: "Error fetching blogs" });
    }
  });

  app.get("/api/blogs/:id", async (req, res) => {
    try {
      const blog = await storage.getBlog(parseInt(req.params.id));
      
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      
      // Only return published blogs to the public unless user is authenticated
      if (!blog.published && !req.isAuthenticated()) {
        return res.status(404).json({ message: "Blog not found" });
      }
      
      res.json(blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
      res.status(500).json({ message: "Error fetching blog" });
    }
  });

  app.get("/api/experiences", async (req, res) => {
    try {
      const experiences = await storage.getExperiences();
      res.json(experiences);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      res.status(500).json({ message: "Error fetching experiences" });
    }
  });

  app.get("/api/skills", async (req, res) => {
    try {
      const skills = await storage.getAllSkills();
      res.json(skills);
    } catch (error) {
      console.error("Error fetching skills:", error);
      res.status(500).json({ message: "Error fetching skills" });
    }
  });

  app.get("/api/skills/category/:category", async (req, res) => {
    try {
      const skills = await storage.getSkillsByCategory(req.params.category);
      res.json(skills);
    } catch (error) {
      console.error("Error fetching skills by category:", error);
      res.status(500).json({ message: "Error fetching skills by category" });
    }
  });

  // Admin routes
  app.use("/api/admin", adminRoutes);

  const httpServer = createServer(app);

  return httpServer;
}
