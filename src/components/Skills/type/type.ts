import { type LucideIcon } from 'lucide-react';

export interface Skill {
  icon: LucideIcon;
  name: string;
}

export interface SkillCategory {
  label: string;
  value: string;
  icon: LucideIcon;
  skills: Skill[];
}