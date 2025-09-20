// Common TypeScript types for the application

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: Date;
  category: BillCategory;
  status: BillStatus;
}

export type BillCategory = 
  | 'utilities'
  | 'internet'
  | 'phone'
  | 'insurance'
  | 'subscriptions'
  | 'other';

export type BillStatus = 
  | 'pending'
  | 'paid'
  | 'overdue'
  | 'scheduled';

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  maxBills: number;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  avatar?: string;
  rating: number;
}