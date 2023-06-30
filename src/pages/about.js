import React from 'react'

import Header from '../components/header'

const tools = [
  {
    name: 'Gatsby',
    description:
      'A blazing-fast static site generator built on the popular library, React.',
    link: 'https://www.gatsbyjs.com/docs/tutorial/getting-started/',
    type: 'React Framework',
  },
  {
    name: 'React',
    description:
      'The most popular and efficient JavaScript library for building websites.',
    link: 'https://react.dev/learn',
    type: 'JavaScript Library',
  },
  {
    name: 'Bootstrap',
    description:
      'The most popular atomic css library for building responsive websites.',
    link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
    type: 'Style Library',
  },
  {
    name: 'JavaScript',
    description:
      'The most active and widely-applicable scripting language in the internet.',
    link: 'https://jgthms.com/javascript-in-14-minutes/',
    type: 'Scripting Language',
  },
  {
    name: 'SCSS',
    description:
      'A css extension language made specifically for rapid development.',
    link: 'https://sass-lang.com/guide',
    type: 'Scripting Language',
  },
  {
    name: 'Opentok',
    description:
      'A JavaScript library for building robust, scaleable meeting applications.',
    link: 'https://tokbox.com/developer/tutorials/web/basic-video-chat/',
    type: 'WebRTC Library',
  },
  {
    name: 'GoLang',
    description:
      'The most efficient programming language in the world, built by google.',
    link: 'https://tour.golang.org/welcome/1',
    type: 'Programming Language',
  },
  {
    name: 'Gin',
    description:
      'High performance Golang framework that delivers in milliseconds.',
    link: 'https://github.com/gin-gonic/gin#getting-started',
    type: 'Web Framework',
  },
  {
    name: 'JWT',
    description: 'Enterprise-grade security protocol impenetrable by hackers.',
    link: 'https://jwt.io/introduction',
    type: 'Security Protocol',
  },
  {
    name: 'Nginx',
    description:
      'Bionic web server capable of handling lakhs of connections effortlessly.',
    link: 'https://www.digitalocean.com/community/tutorial_collections/how-to-install-nginx',
    type: 'Web Server',
  },
  {
    name: 'Debian',
    description:
      'Light, free, and universal operating system built on Linux for enterprise.',
    link: 'https://www.debian.org/doc/manuals/debian-reference/ch01.en.html',
    type: 'Operating System',
  },
  {
    name: 'Mongo',
    description:
      'High-performance, scaleable, document-oriented database with power.',
    link: 'https://docs.mongodb.com/manual/introduction/',
    type: 'Document Database',
  },
]

export default function About() {
  return (
    <Header>
      <div className="row p-5 text-md-center justify-content-center align-items-center">
        <div className="col-lg-8 py-5">
          <h1 className="display-5 fw-bold">
            Ignited <span className="text-primary">Passion</span>
            <br />
          </h1>
          <blockquote>
            <p className="blockquote lead my-5">
              I once attended programming classes as a student, hoping to learn
              something without a clue as for what it was. My teacher, at that
              time, was a very special one who inspired me to go beyond the
              curriculum. For months, I had marched forward, mastering complex,
              enterprise-grade tools, until I reached a dead end. I had new
              interests, but I couldn't let my experiences go to waste. This,
              coupled with my avid programming skills, created the interactive
              programming school, Virtuoso, to pass on my knowledge and passion.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Akshaj Jagarapu, Founder
          </figcaption>
        </div>
      </div>
      <div className="row text-md-center justify-content-between align-items-center p-5 mt-5">
        <div className="col">
          <h1 className="display-5 fw-bold">Software Tools</h1>
          <p className="h5 mt-4 mb-2">
            Information and tutorial links to the coveted software behind this
            website to get you started on your own intellectual journey!
          </p>
        </div>
      </div>
      <div className="row px-5">
        {tools.map(({ name, description, link, type }) => {
          return (
            <div className="col-sm-4 mb-4" key={name}>
              <div className="card shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
                  <p className="card-text">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-sm btn-primary"
                  >
                    Learn {name}
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="row justify-content-center align-items-center p-5 m-5">
        <div className="col-6 d-grid">
          <span className="d-block btn btn-primary btn-lg shadow-lg disabled">
            Registration Ended
          </span>
        </div>
      </div>
    </Header>
  )
}

export function Head() {
  return (
    <>
      <title>About | Virtuoso</title>
      <meta
        name="description"
        content="Learn the fundamentals of Artificial Intelligence (AI) with the most active language on the internet, JavaScript. With hands-on lectures and labs, build AI-powered web applications available to the public. Reach the heights of programming within a week under the guidance of a full-stack developer."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Programming Camp, Coding Camp, JavaScript Classes, Software Training, JavaScript Training, Software Camp, JavaScript Camp, Software Classes"
      />
      <meta charset="utf-8" />
      <meta name="author" content="Akshaj Jagarapu" />
      <script type="application/ld+json">
        {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "https://govirtuoso.tech",
                    "name": "Go Virtuoso!",
                    "url": "https://govirtuoso.tech/about/",
                    "logo": "https://govirtuoso.tech/logo.png",
                    "telephone": "+17402846439",
                    "speakable": {
                      "@type": "SpeakableSpecification",
                      "xpath": [
                          "/html/head/title",
                          "/html/head/meta[@name='description']/@content"
                        ]
                      }
                    }
                }
            `}
      </script>
    </>
  )
}
