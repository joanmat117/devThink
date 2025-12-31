import { useEffect } from 'react'
import { InfiniteScroll } from './InfiniteScroll'
import { getIcon } from './SkillsIconLoader'

// Types for technologies
type Category = {
  text: string
  logo: string
}

type Technologies = {
  'Desarrollo Frontend': Category[]
  'Ecosistema Backend': Category[]
  'Herramientas & DevOps': Category[]
}

// Technologies based on your stack
const technologies: Technologies = {
  'Desarrollo Frontend': [
    { text: 'HTML', logo: 'simple-icons:html5' },
    { text: 'CSS', logo: 'simple-icons:css3' },
    { text: 'JavaScript', logo: 'simple-icons:javascript' },
    { text: 'TypeScript', logo: 'simple-icons:typescript' },
    { text: 'React', logo: 'simple-icons:react' },
    { text: 'Next.js', logo: 'simple-icons:nextdotjs' },
    { text: 'Astro', logo: 'simple-icons:astro' },
  ],
  'Ecosistema Backend': [
    { text: 'Node.js', logo: 'simple-icons:nodedotjs' },
    { text: 'Express', logo: 'simple-icons:express' },
    { text: 'NestJS', logo: 'simple-icons:nestjs' },
    { text: 'SQL', logo: 'simple-icons:postgresql' },
    { text: 'Supabase', logo: 'simple-icons:supabase' },
  ],
  'Herramientas & DevOps': [
    { text: 'Git', logo: 'simple-icons:git' },
    { text: 'GitHub', logo: 'simple-icons:github' },
    { text: 'Vitest', logo: 'simple-icons:vitest' },
  ],
}

const categories = Object.keys(technologies)
const groupSize = Math.ceil(categories.length / 3)
const categoryGroups = [
  categories.slice(0, groupSize),
  categories.slice(groupSize, groupSize * 2),
  categories.slice(groupSize * 2),
]

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach((badge) => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-full">
      <div className="space-y-2">
        {categoryGroups.map((group, groupIndex) => (
          <InfiniteScroll
            key={groupIndex}
            duration={50000}
            direction={groupIndex % 2 === 0 ? 'normal' : 'reverse'}
            showFade={true}
            className="flex flex-row justify-center"
          >
            {group.flatMap((category) =>
              technologies[category as keyof Technologies].map(
                (tech: Category, techIndex: number) => {
                  const IconComponent = getIcon(tech.logo)
                  return (
                    <div
                      key={`${category}-${techIndex}`}
                      className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                      data-tech-name={`${category}-${techIndex}`}
                    >
                      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                        <IconComponent className="tech-icon text-primary" />
                      </span>
                      <span className="text-foreground font-medium">
                        {tech.text}
                      </span>
                    </div>
                  )
                },
              ),
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
