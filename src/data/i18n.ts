import type { Lang } from '../i18n';
import {
  certifications,
  education,
  experience,
  languages as spokenLanguages,
  type Experience,
} from './experience';
import { certificationsAr, educationAr, experienceAr, languagesAr } from './experience.ar';
import { offerings, pillars, type Offering, type Pillar } from './services';
import { offeringsAr, pillarsAr } from './services.ar';
import { skillGroups, topSkills } from './skills';
import { skillGroupsAr, topSkillsAr } from './skills.ar';
import { stats, type Stat } from './stats';
import { statsAr } from './stats.ar';
import { testimonials, type Testimonial } from './testimonials';
import { testimonialsAr } from './testimonials.ar';

type SkillGroup = { label: string; items: readonly string[] };
type Education = {
  period: string;
  school: string;
  url: string;
  detail: string;
};

export function getExperience(lang: Lang): Experience[] {
  return lang === 'ar' ? experienceAr : experience;
}

export function getEducation(lang: Lang): Education[] {
  return lang === 'ar' ? educationAr : [...education];
}

export function getCertifications(lang: Lang): string[] {
  return lang === 'ar' ? certificationsAr : [...certifications];
}

export function getSpokenLanguages(lang: Lang): string[] {
  return lang === 'ar' ? languagesAr : [...spokenLanguages];
}

export function getSkillGroups(lang: Lang): SkillGroup[] {
  return lang === 'ar' ? skillGroupsAr : [...skillGroups];
}

export function getTopSkills(lang: Lang): string[] {
  return lang === 'ar' ? [...topSkillsAr] : [...topSkills];
}

export function getTestimonials(lang: Lang): Testimonial[] {
  return lang === 'ar' ? testimonialsAr : testimonials;
}

export function getStats(lang: Lang): Stat[] {
  return lang === 'ar' ? statsAr : stats;
}

export function getPillars(lang: Lang): Pillar[] {
  return lang === 'ar' ? pillarsAr : pillars;
}

export function getOfferings(lang: Lang): Offering[] {
  return lang === 'ar' ? offeringsAr : offerings;
}
