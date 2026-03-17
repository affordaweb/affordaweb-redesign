export interface SeoCheck {
  label: string
  status: 'pass' | 'warning' | 'fail'
  detail: string
}

export interface SeoCategory {
  name: string
  score: number
  maxScore: number
  checks: SeoCheck[]
}

export interface SeoRecommendation {
  priority: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
}

export interface SeoReport {
  id: string
  website: string
  domain: string
  name: string
  email: string
  businessType: string
  primaryGoal: string
  seoScore: number
  grade: string
  categories: SeoCategory[]
  topIssues: string[]
  quickWins: string[]
  recommendations: SeoRecommendation[]
  paymentStatus: 'pending' | 'paid'
  createdAt: string
}
