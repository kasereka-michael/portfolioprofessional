import { 
  users, 
  contacts,
  projects,
  blogs,
  experiences,
  skills,
  type User, 
  type InsertUser, 
  type Contact,
  type InsertContact,
  type Project,
  type InsertProject,
  type Blog,
  type InsertBlog,
  type Experience,
  type InsertExperience,
  type Skill,
  type InsertSkill
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import connectPg from "connect-pg-simple";
import session from "express-session";
import { pool } from "./db";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // Session store
  sessionStore: session.SessionStore;

  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;

  // Projects operations
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;

  // Blogs operations
  getBlogs(includeUnpublished?: boolean): Promise<Blog[]>;
  getBlog(id: number): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog | undefined>;
  deleteBlog(id: number): Promise<boolean>;

  // Experiences operations
  getExperiences(): Promise<Experience[]>;
  getExperience(id: number): Promise<Experience | undefined>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined>;
  deleteExperience(id: number): Promise<boolean>;

  // Skills operations
  getSkillsByCategory(category: string): Promise<Skill[]>;
  getAllSkills(): Promise<Skill[]>;
  getSkill(id: number): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.SessionStore;

  constructor() {
    this.sessionStore = new PostgresSessionStore({ 
      pool, 
      createTableIfMissing: true 
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact;
  }

  // Projects methods
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db
      .update(projects)
      .set({ ...project, updatedAt: new Date() })
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }

  async deleteProject(id: number): Promise<boolean> {
    const result = await db.delete(projects).where(eq(projects.id, id));
    return !!result;
  }

  // Blogs methods
  async getBlogs(includeUnpublished = false): Promise<Blog[]> {
    if (includeUnpublished) {
      return await db.select().from(blogs).orderBy(blogs.date);
    } else {
      return await db
        .select()
        .from(blogs)
        .where(eq(blogs.published, true))
        .orderBy(blogs.date);
    }
  }

  async getBlog(id: number): Promise<Blog | undefined> {
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    return blog;
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const [newBlog] = await db.insert(blogs).values(blog).returning();
    return newBlog;
  }

  async updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog | undefined> {
    const [updatedBlog] = await db
      .update(blogs)
      .set({ ...blog, updatedAt: new Date() })
      .where(eq(blogs.id, id))
      .returning();
    return updatedBlog;
  }

  async deleteBlog(id: number): Promise<boolean> {
    const result = await db.delete(blogs).where(eq(blogs.id, id));
    return !!result;
  }

  // Experiences methods
  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.order);
  }

  async getExperience(id: number): Promise<Experience | undefined> {
    const [experience] = await db.select().from(experiences).where(eq(experiences.id, id));
    return experience;
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const [newExperience] = await db.insert(experiences).values(experience).returning();
    return newExperience;
  }

  async updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined> {
    const [updatedExperience] = await db
      .update(experiences)
      .set({ ...experience, updatedAt: new Date() })
      .where(eq(experiences.id, id))
      .returning();
    return updatedExperience;
  }

  async deleteExperience(id: number): Promise<boolean> {
    const result = await db.delete(experiences).where(eq(experiences.id, id));
    return !!result;
  }

  // Skills methods
  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return await db
      .select()
      .from(skills)
      .where(eq(skills.category, category))
      .orderBy(skills.order);
  }

  async getAllSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.category, skills.order);
  }

  async getSkill(id: number): Promise<Skill | undefined> {
    const [skill] = await db.select().from(skills).where(eq(skills.id, id));
    return skill;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const [updatedSkill] = await db
      .update(skills)
      .set({ ...skill, updatedAt: new Date() })
      .where(eq(skills.id, id))
      .returning();
    return updatedSkill;
  }

  async deleteSkill(id: number): Promise<boolean> {
    const result = await db.delete(skills).where(eq(skills.id, id));
    return !!result;
  }
}

export const storage = new DatabaseStorage();
