// Add RSS feeds below
// Url: Link to RSS feed xml (url must start with 'https://') (Required)
// urlText: Text  for hyperlink shown at bottom of article (Required)
// Text: What users see in feed selection list (Required)
// Description: A description of what this is link contains.(Optional)
// Tags: What the user can say to automatically call certain feeds (Required)
// image: image shown next to items in category list (can be a local path or directory) (Optional)
// Copyright: Feeds copyright message to use if the feed doesn't have one (Optional)
module.exports = module.exports = [
  {
    url: 'https://thefantasyfootballers.libsyn.com/fantasyfootball',
    urlText: 'Click here to see the full story on thefantasyfootballers.libsyn.com',
    text: 'Example Podcast',
    image: 'https://ssl-static.libsyn.com/p/assets/4/e/5/1/4e5158db1f53de39/Fantasy-Football.jpg',
    description: "Example description.",
    tags: ['the fantasy footballers', 'sport']
  },
  {
    url: 'https://www.espn.com/espn/rss/news',
    urlText: 'Click here to see the full story on espn.com',
    text: 'Example Text',
    image: 'https://a.espncdn.com/i/espn/teamlogos/lrg/trans/espn_dotcom_black.gif',
    description: "Example description.",
    tags: ['sports', 'espn']
  },
  {
    url: 'https://www.ketoconnect.net/feed/',
    urlText: 'Click here to see the full story on keto.com',
    text: 'Example Text 2',
    image: 'https://www.ketoconnect.net/wp-content/uploads/2018/05/cropped-KC_logomark_200_200-32x32.png',
    copyright: 'Copyright https://www.ketoconnect.net/feed/',
    tags: ['keto']
  }
]