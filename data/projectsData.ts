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
    imgSrc: '/static/images/DevWebBlog.png',
    href: 'https://www.devweb.blog/',
  },
  {
    title: 'Quiz App',
    description:
      'Quiz App in JavaScript, HTML5, CSS3 developed and deployed during my online tutorial',
    imgSrc: '/static/images/App-Quiz-JavaScript-HTML-CSS.png',
    href: 'https://dzmitryur.github.io/quiz-app/',
  },
]

export default projectsData
