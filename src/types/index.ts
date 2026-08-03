export type PackagingCategory = 
  | 'Rigid Box / Hardbox' 
  | 'Folding Box / Dus Karton' 
  | 'Flexible Packaging / Standing Pouch' 
  | 'Label Sticker & Sleeve' 
  | 'Eco-Friendly Packaging' 
  | 'Custom Dieline & Prototyping';

export interface ServiceItem {
  id: string;
  title: string;
  category: PackagingCategory;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PackagingCategory;
  thumbnail: string;
  impactMetric: string;
  shortSummary: string;
  materialSpecs: string;
  finishingTech: string[];
  liveUrl?: string;
}

export interface FounderItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  specialization: string;
  linkedInUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  clientName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  orderType: PackagingCategory[];
  requestScale: string;
  estimatedBudget: string;
  projectNotes: string;
}
