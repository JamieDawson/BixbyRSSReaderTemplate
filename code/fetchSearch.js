var console = require('console')
const feeds = require("./feeds");

module.exports.function = function fetchSportsList(tag) {

  for (var i = 0; i < feeds.length; i++) {
    for (var j = 0; j < feeds[i].tags.length; j++) {
      if (tag) {
        for (var end = tag.split(' ').length; end >= 0; end--) {
          var start = 0;
          for (var tmpEnd = end; tmpEnd < tag.split(' ').length + 1; tmpEnd++) {
            var find = tag.split(' ').slice(start, tmpEnd).join(' ')
            if (feeds[i].tags[j].toLowerCase().includes(find.toLowerCase()))
              return feeds[i]
            start++
          }
        }
      }
    }
  }

  return feeds;
}