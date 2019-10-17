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
    url: 'https://rss.cbc.ca/lineup/topstories.xml',
    urlText: 'Click here to see the full story on cbc.ca',
    text: 'CBC Top Stories',
    image: './icon.png',
    description: "The top news stories from CBC.",
    tags: ['canada', 'cbc', 'world news', 'top stories']
  }
]