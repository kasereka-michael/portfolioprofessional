import { pgTable, text, serial, timestamp, varchar, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  isAdmin: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  subject: varchar("subject", { length: 200 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export type InsertContact = z.infer<typeof contactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Projects schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  github: text("github").notNull(),
  demo: text("demo").notNull(),
  featured: boolean("featured").default(false).notNull(),
  categories: text("categories").array().notNull(),
  technologies: json("technologies").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const projectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  image: true,
  github: true,
  demo: true,
  featured: true,
  categories: true,
  technologies: true,
});

export type InsertProject = z.infer<typeof projectSchema>;
export type Project = typeof projects.$inferSelect;

// Blogs schema
export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  category: json("category").notNull(),
  published: boolean("published").default(false).notNull(),
  date: timestamp("date").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const blogSchema = createInsertSchema(blogs).pick({
  title: true,
  excerpt: true,
  content: true,
  image: true,
  category: true,
  published: true,
  date: true,
});

export type InsertBlog = z.infer<typeof blogSchema>;
export type Blog = typeof blogs.$inferSelect;

// Experiences schema
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  company: varchar("company", { length: 200 }).notNull(),
  period: varchar("period", { length: 100 }).notNull(),
  description: text("description").notNull(),
  achievements: text("achievements").array().notNull(),
  order: serial("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const experienceSchema = createInsertSchema(experiences).pick({
  title: true,
  company: true,
  period: true,
  description: true,
  achievements: true,
  order: true,
});

export type InsertExperience = z.infer<typeof experienceSchema>;
export type Experience = typeof experiences.$inferSelect;

// Skills schema
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 100 }).notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  level: serial("level").notNull(),
  order: serial("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const skillSchema = createInsertSchema(skills).pick({
  category: true,
  name: true,
  level: true,
  order: true,
});

export type InsertSkill = z.infer<typeof skillSchema>;
export type Skill = typeof skills.$inferSelect;
