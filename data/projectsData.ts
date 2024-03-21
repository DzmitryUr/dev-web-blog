interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Dev Web Blog',
    description:
      'My Web Development Blog about programming with JavaScript, HTML5, CSS3, React, and Next.js',
    //imgSrc: '/static/images/google.png',
    href: 'https://www.devweb.blog/',
  },
]

export default projectsData
