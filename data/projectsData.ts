interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Blog',
    description: 'Web Development Blog',
    //imgSrc: '/static/images/google.png',
    href: 'https://www.devweb.blog/',
  },
]

export default projectsData
