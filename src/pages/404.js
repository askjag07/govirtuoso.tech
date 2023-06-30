import React from 'react'

export default function Lost() {
  return (
    <div
      className="spinner-border text-primary center position-absolute"
      role="status"
    >
      <span className="visually-hidden">Redirecting...</span>
    </div>
  )
}

export function Head() {
  return (
    <>
      <title>Page Not Found | Virtuoso</title>
      <meta
        name="description"
        content="The page you requested doesn't exist. You can try to find it from the homepage."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Programming Camp, Coding Camp, JavaScript Classes, Software Training, JavaScript Training, Software Camp, JavaScript Camp, Software Classes"
      />
      <meta name="author" content="Akshaj Jagarapu" />
      <script type="application/ld+json">
        {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "https://govirtuoso.tech",
                    "name": "Go Virtuoso!",
                    "url": "https://govirtuoso.tech",
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
