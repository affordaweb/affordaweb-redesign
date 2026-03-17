export interface BriefData {
  report_id: string
  business_name: string
  tagline: string
  target_audience: string
  top_services: string
  differentiator: string
  color_preferences: string
  reference_sites: string
  features: string[]
  has_photos: 'yes' | 'partial' | 'no'
  needs_copy: 'yes' | 'no'
  timeline: 'asap' | '2weeks' | '1month' | 'flexible'
  notes: string
  submitted_at: string
}

export const FEATURE_OPTIONS = [
  'Contact form',
  'Booking / calendar',
  'Online shop',
  'Photo gallery',
  'Blog',
  'FAQ section',
  'Video embed',
  'Google Maps',
  'Social media feed',
  'Live chat',
]
