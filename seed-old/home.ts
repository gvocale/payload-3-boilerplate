import type { Page } from '../payload-types'

export const home: Partial<Page> = {
  title: 'Home',
  slug: 'home',
  _status: 'published',
  meta: {
    title: 'Payload CMS Website Template',
    description:
      'A powerful, flexible, and production-ready Payload CMS website template with PostgreSQL support.',
    image: '{{IMAGE_1}}'
  },
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'Payload CMS Website Template'
          }
        ],
        type: 'h1'
      },
      {
        children: [
          {
            text: 'Welcome to your Payload CMS powered website! This template offers a range of features including authentication, premium content, comments, and more. Explore our latest posts to learn about Payload CMS, Medusa.js, and Vendure.'
          }
        ],
        type: 'large-body'
      }
    ],
    links: [
      {
        link: {
          type: 'reference',
          appearance: 'primary',
          reference: {
            relationTo: 'pages',
            value: '{{POSTS_PAGE_ID}}'
          },
          label: 'Explore Posts',
          url: ''
        }
      },
      {
        link: {
          type: 'reference',
          appearance: 'secondary',
          reference: {
            relationTo: 'pages',
            value: '{{PROJECTS_PAGE_ID}}'
          },
          label: 'View Projects',
          url: ''
        }
      }
    ]
  },
  layout: [
    {
      blockName: 'Content Block',
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: [
            {
              children: [
                {
                  text: 'Featured Content'
                }
              ],
              type: 'h2'
            }
          ]
        },
        {
          size: 'half',
          richText: [
            {
              children: [
                {
                  text: 'Payload CMS'
                }
              ],
              type: 'h3'
            },
            {
              children: [
                {
                  text: 'Discover the power and flexibility of Payload CMS for building modern websites. Learn about its key features and how to get started.'
                }
              ]
            }
          ],
          enableLink: true,
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: '{{POST_1_ID}}'
            },
            label: 'Read More'
          }
        },
        {
          size: 'half',
          richText: [
            {
              children: [
                {
                  text: 'Medusa.js 2.0'
                }
              ],
              type: 'h3'
            },
            {
              children: [
                {
                  text: "Explore the latest features of Medusa.js 2.0 and how it's revolutionizing e-commerce development. Learn about its new admin dashboard, enhanced inventory management, and more."
                }
              ]
            }
          ],
          enableLink: true,
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: '{{POST_3_ID}}'
            },
            label: 'Read More'
          }
        }
      ]
    },
    {
      blockType: 'mediaBlock',
      blockName: 'Media Block',
      position: 'default',
      media: '{{IMAGE_2}}'
    },
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      introContent: [
        {
          type: 'h4',
          children: [
            {
              text: 'Latest Posts'
            }
          ]
        },
        {
          type: 'p',
          children: [
            {
              text: 'Explore our latest articles on Payload CMS, Medusa.js, and Vendure. Learn about these powerful tools and how they can enhance your web development projects.'
            }
          ]
        }
      ],
      populateBy: 'collection',
      relationTo: 'posts',
      limit: 4,
      categories: []
    },
    {
      blockType: 'cta',
      blockName: 'CTA',
      richText: [
        {
          children: [
            {
              text: 'Ready to build your next project?'
            }
          ],
          type: 'h4'
        },
        {
          children: [
            {
              text: 'Get started with Payload CMS today and create powerful, flexible websites with ease.'
            }
          ]
        }
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: 'https://github.com/rpuls/payload-cms-boilerplate',
            label: 'View on GitHub',
            appearance: 'primary'
          }
        },
        {
          link: {
            type: 'custom',
            url: 'https://funkyton.com/payload-cms/',
            label: 'Read Tutorial',
            appearance: 'secondary'
          }
        }
      ]
    }
  ]
}
