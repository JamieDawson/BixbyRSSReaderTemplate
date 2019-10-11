var http = require('http')
var console = require('console')
const HTMLCODES = require("./htmlCodes");
var g_item = 0

function removeHTML(str) {
	if (!str || (str === ''))
		return

	// Remove html tags and hyperlinks
	str = str.toString().replace(/<[^>]*>/g, '').split('[&#8230;]')[0];

	// Replace SGML with ascii symbols
	HTMLCODES.forEach(code => {
		while (str.includes(code.key))
			str = str.replace(code.key, code.value)
	})

	return str
}

function fetchThumbnailImage(channel, item, search) {
	var ret
	if ("enclosure" in item && item['itunes:image'])
		ret = item['itunes:image']['@href']
	else if (item['media:thumbnail'])
		ret = item['media:thumbnail']['@url']
	else if (item.image)
		ret = item.image
	else if ("enclosure" in item && item.enclosure['@type'] == "image/jpeg")
		ret = item.enclosure['@url']
	else if (channel.image)
		ret = channel.image.length > 1 ? channel.image[0].url : channel.image.url
	else if (channel['itunes:image'])
		ret = channel['itunes:image']['@href']
	else {
		var rawText = http.getUrl(search.url, { format: 'text' }).split('item')
		var matches = []
		var url = ''
		rex = /<img[^>]*src='([^']*)/g;
		for (var i = 0; i < rawText.length; i++) {
			rawText.splice(i, 1);
		}
		while (matches = rex.exec(rawText[g_item])) {
			url = matches[1]
		}
	}
	return { url: ret ? ret : url ? url : 'icon.png' }
}

function fetchItemDescription(item, search) {
	var description
	if (typeof item.description == 'string'
		&& item.description
		&& item.description != 'null')
		description = removeHTML(item.description)
	else if (item['itunes:summary'])
		description = removeHTML(item['itunes:summary'])
	else {
		var rawText = http.getUrl(search.url, { format: 'text' }).split('item')
		var matches = []
		rex = /<p[>^]*([^']*)<\/p>/g;
		for (var i = 0; i < rawText.length; i++) {
			rawText.splice(i, 1);
		}
		console.log(rawText)
		while (matches = rex.exec(rawText[g_item])) {
			description = matches[1]
		}
	}
	return description ? removeHTML(description) : "No description"
}

function buildSharedtags(channel, item, search) {
	return {
		urlText: search.urlText,
		tag: search.text,
		image: fetchThumbnailImage(channel, item, search),
		link: item.link ? item.link : null,
		copyright: channel.copyright ? removeHTML(channel.copyright) : search.copyright,
		feedDescription: typeof channel.description == 'string' && channel.description ? removeHTML(channel.description) : null,
		title: item.title ? removeHTML(item.title) : "No title",
		date: item.pubDate ? item.pubDate : "Unknown",
		description: fetchItemDescription(item, search)
	}
}

function fetchAudioInfo(item, image) {
	return {
		id: 1,
		stream: [{
			url: item['enclosure']['@url'],
			format: "mp3"
		}],
		albumArtUrl: image,
		title: item.title ? item.title : "No title",
		subtitle: item['itunes:subtitle'] ? item['itunes:subtitle'] : "No subtitle",
		artist: item['itunes:author'] ? item['itunes:author'] : "No artist",
	}
}

module.exports.function = function fetchNews(tag, search) {
	var data = http.getUrl(search.url, { format: 'xmljs' })
	var ret = []
	data.rss.channel.item.forEach(item => {
		ret.push(buildSharedtags(data.rss.channel, item, search))
		if ("enclosure" in item && (item.enclosure['@type'] == "mp3" || item.enclosure['@type'].includes('audio')))
			ret[ret.length - 1].audioItem = fetchAudioInfo(item, ret[ret.length - 1].image.url)
		g_item++
	})
	return ret
}