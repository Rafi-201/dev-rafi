import { Monitor, Briefcase, Languages, Box, Figma, Globe, FileSpreadsheet, Film, Code2, Palette, Search, Smartphone, Flag } from 'lucide-react';
import { SkillCategory } from '../type/type';

export const skillData: SkillCategory[] = [
  {
    label: "Software",
    value: "1",
    icon: Monitor,
    skills: [
      { icon: Box, name: "Notion" },
      { icon: Figma, name: "Figma" },
      { icon: Globe, name: "Webflow" },
      { icon: FileSpreadsheet, name: "Google Sheets" },
      { icon: Film, name: "Final Cut Pro" },
      { icon: Code2, name: "Python" },
    ]
  },
  {
    label: "Expertise",
    value: "2",
    icon: Briefcase,
    skills: [
      { icon: Palette, name: "UI Design" },
      { icon: Search, name: "UX Research" },
      { icon: Smartphone, name: "Mobile Development" },
    ]
  },
  {
    label: "Language",
    value: "3",
    icon: Languages,
    skills: [
      { icon: Flag, name: "English" },
      { icon: Flag, name: "Bangla" },
    ]
  },
];