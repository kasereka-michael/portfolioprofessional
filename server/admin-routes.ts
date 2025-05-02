import { Router } from "express";
import { storage } from "./storage";
import { isAdmin, isAuthenticated } from "./auth";
import { 
  projectSchema, 
  blogSchema, 
  experienceSchema, 
  skillSchema
} from "@shared/schema";
import { ZodError } from "zod";

const router = Router();

// Admin check route
router.get("/check", isAuthenticated, isAdmin, (req, res) => {
  res.json({ message: "Admin access granted" });
});

// PROJECTS CRUD
router.get("/projects", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const projects = await storage.getProjects();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/projects/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const project = await storage.getProject(parseInt(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.post("/projects", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const validatedData = projectSchema.parse(req.body);
    const project = await storage.createProject(validatedData);
    res.status(201).json(project);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.put("/projects/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = await storage.getProject(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const validatedData = projectSchema.partial().parse(req.body);
    const updatedProject = await storage.updateProject(projectId, validatedData);
    res.json(updatedProject);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.delete("/projects/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = await storage.getProject(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await storage.deleteProject(projectId);
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// BLOGS CRUD
router.get("/blogs", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const blogs = await storage.getBlogs(true); // Include unpublished blogs for admin
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});

router.get("/blogs/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const blog = await storage.getBlog(parseInt(req.params.id));
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

router.post("/blogs", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const validatedData = blogSchema.parse(req.body);
    const blog = await storage.createBlog(validatedData);
    res.status(201).json(blog);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.put("/blogs/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const blogId = parseInt(req.params.id);
    const blog = await storage.getBlog(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const validatedData = blogSchema.partial().parse(req.body);
    const updatedBlog = await storage.updateBlog(blogId, validatedData);
    res.json(updatedBlog);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.delete("/blogs/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const blogId = parseInt(req.params.id);
    const blog = await storage.getBlog(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await storage.deleteBlog(blogId);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// EXPERIENCES CRUD
router.get("/experiences", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  } catch (error) {
    next(error);
  }
});

router.get("/experiences/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const experience = await storage.getExperience(parseInt(req.params.id));
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.json(experience);
  } catch (error) {
    next(error);
  }
});

router.post("/experiences", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const validatedData = experienceSchema.parse(req.body);
    const experience = await storage.createExperience(validatedData);
    res.status(201).json(experience);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.put("/experiences/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const experienceId = parseInt(req.params.id);
    const experience = await storage.getExperience(experienceId);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    const validatedData = experienceSchema.partial().parse(req.body);
    const updatedExperience = await storage.updateExperience(experienceId, validatedData);
    res.json(updatedExperience);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.delete("/experiences/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const experienceId = parseInt(req.params.id);
    const experience = await storage.getExperience(experienceId);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    await storage.deleteExperience(experienceId);
    res.json({ message: "Experience deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// SKILLS CRUD
router.get("/skills", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const skills = await storage.getAllSkills();
    res.json(skills);
  } catch (error) {
    next(error);
  }
});

router.get("/skills/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const skill = await storage.getSkill(parseInt(req.params.id));
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.json(skill);
  } catch (error) {
    next(error);
  }
});

router.post("/skills", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const validatedData = skillSchema.parse(req.body);
    const skill = await storage.createSkill(validatedData);
    res.status(201).json(skill);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.put("/skills/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const skillId = parseInt(req.params.id);
    const skill = await storage.getSkill(skillId);
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    const validatedData = skillSchema.partial().parse(req.body);
    const updatedSkill = await storage.updateSkill(skillId, validatedData);
    res.json(updatedSkill);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.format() });
    } else {
      next(error);
    }
  }
});

router.delete("/skills/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const skillId = parseInt(req.params.id);
    const skill = await storage.getSkill(skillId);
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    await storage.deleteSkill(skillId);
    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// CONTACTS (Read-only for admin)
router.get("/contacts", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const contacts = await storage.getAllContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/contacts/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const contact = await storage.getContact(parseInt(req.params.id));
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

export default router;