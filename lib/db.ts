// Simple in-memory database for demo purposes
// In production, replace with MongoDB, PostgreSQL, etc.

export interface Promotion {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Content {
  id: string;
  type: 'service' | 'project' | 'testimonial';
  title: string;
  description: string;
  image?: string;
  data: Record<string, unknown>;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  password: string; // hashed
  name: string;
  role: 'admin';
  createdAt: Date;
}

// Pre-hashed password for "admin123" (bcrypt hash with 10 rounds)
// IMPORTANT: Change this password in production!
// To generate a new hash: bcrypt.hash('your-password', 10)
const ADMIN_PASSWORD_HASH = "$2b$10$mXCnjsq9KC/wwGv5xfNlQeOEPTE8zQJbz./qi02dzxsnwQZntFtui";

// In-memory storage (replace with real database in production)
// WARNING: Data will be lost on server restart
const db = {
  users: [{
    id: "admin-1",
    email: "admin@tecnodespegue.com",
    password: ADMIN_PASSWORD_HASH,
    name: "Admin Tecnodespegue",
    role: "admin" as const,
    createdAt: new Date(),
  }] as User[],
  promotions: [] as Promotion[],
  content: [] as Content[],
};

// Database operations
export const database = {
  // Users
  async getUserByEmail(email: string): Promise<User | null> {
    return db.users.find(u => u.email === email) || null;
  },

  async createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const newUser: User = {
      ...user,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    db.users.push(newUser);
    return newUser;
  },

  // Promotions
  async getPromotions(): Promise<Promotion[]> {
    return db.promotions;
  },

  async getActivePromotions(): Promise<Promotion[]> {
    return db.promotions.filter(p => p.active);
  },

  async getPromotionById(id: string): Promise<Promotion | null> {
    return db.promotions.find(p => p.id === id) || null;
  },

  async createPromotion(promotion: Omit<Promotion, 'id' | 'createdAt' | 'updatedAt'>): Promise<Promotion> {
    const newPromotion: Promotion = {
      ...promotion,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.promotions.push(newPromotion);
    return newPromotion;
  },

  async updatePromotion(id: string, data: Partial<Promotion>): Promise<Promotion | null> {
    const index = db.promotions.findIndex(p => p.id === id);
    if (index === -1) return null;

    db.promotions[index] = {
      ...db.promotions[index],
      ...data,
      updatedAt: new Date(),
    };
    return db.promotions[index];
  },

  async deletePromotion(id: string): Promise<boolean> {
    const index = db.promotions.findIndex(p => p.id === id);
    if (index === -1) return false;
    db.promotions.splice(index, 1);
    return true;
  },

  // Content
  async getContent(): Promise<Content[]> {
    return db.content;
  },

  async getContentByType(type: Content['type']): Promise<Content[]> {
    return db.content.filter(c => c.type === type);
  },

  async createContent(content: Omit<Content, 'id' | 'createdAt' | 'updatedAt'>): Promise<Content> {
    const newContent: Content = {
      ...content,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.content.push(newContent);
    return newContent;
  },

  async updateContent(id: string, data: Partial<Content>): Promise<Content | null> {
    const index = db.content.findIndex(c => c.id === id);
    if (index === -1) return null;

    db.content[index] = {
      ...db.content[index],
      ...data,
      updatedAt: new Date(),
    };
    return db.content[index];
  },

  async deleteContent(id: string): Promise<boolean> {
    const index = db.content.findIndex(c => c.id === id);
    if (index === -1) return false;
    db.content.splice(index, 1);
    return true;
  },
};
