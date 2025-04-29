import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
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

  const httpServer = createServer(app);

  return httpServer;
}
