// Add RSS feeds below
// Url: Link to RSS feed xml (url must start with 'https://')
// Text: What users see in feed selection list
// Description: A description of what this is link contains.
// Tags: What the user can say to automatically call certain feeds
// Copyright: Feeds copyright message to use if the feed doesn't have one
module.exports = module.exports = [
  {
    url: 'https://thefantasyfootballers.libsyn.com/fantasyfootball',
    urlText: 'Click here to see the full story on thefantasyfootballers.libsyn.com',
    text: 'Example Podcast',
    description: "Example description.",
    tags: ['the fantasy footballers', 'sport']
  },
  {
    url: 'https://www.espn.com/espn/rss/news',
    urlText: 'Click here to see the full story on espn.com',
    text: 'Example Text',
    tags: ['sports', 'espn']
  },
  {
    url: 'https://www.ketoconnect.net/feed/',
    urlText: 'Click here to see the full story on keto.com',
    text: 'Example Text 2',
    copyright: 'Copyright https://www.ketoconnect.net/feed/',
    tags: ['keto']
  }
]