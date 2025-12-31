/**
 * Optimized icon loader for Skills component
 * This helps with tree-shaking by importing icons only when needed
 */
import { type IconType } from 'react-icons'
import { FaQuestionCircle } from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVitest,
} from 'react-icons/si'

// Icon mapping - using direct imports for better tree-shaking
export const iconMap: { [key: string]: IconType } = {
  // Frontend Essentials
  'simple-icons:html5': SiHtml5,
  'simple-icons:css3': SiCss3,
  'simple-icons:javascript': SiJavascript,
  'simple-icons:typescript': SiTypescript,
  
  // Frameworks & Meta-Frameworks
  'simple-icons:react': SiReact,
  'simple-icons:nextdotjs': SiNextdotjs,
  'simple-icons:astro': SiAstro,
  
  // Backend & Runtime
  'simple-icons:nodedotjs': SiNodedotjs,
  'simple-icons:express': SiExpress,
  'simple-icons:nestjs': SiNestjs,
  
  // Databases & Backend-as-a-Service
  'simple-icons:postgresql': SiPostgresql, // Representando SQL
  'simple-icons:supabase': SiSupabase,
  
  // Development Tools
  'simple-icons:git': SiGit,
  'simple-icons:github': SiGithub,
  'simple-icons:vitest': SiVitest,
}

export function getIcon(logo: string): IconType {
  return iconMap[logo] || FaQuestionCircle
}

