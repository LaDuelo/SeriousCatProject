

module.exports = function () {
    this.fetchSubreddit = function (name) {
        r.getSubreddit(name).getHot().filter(filterByScore).map(post => makeObject(post)).sort(sortPostsByScore).then(displayPosts);
    }
}

const snoowrap = require('snoowrap');
const r = new snoowrap({
    userAgent: userAgent,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken
});

function filterByScore(posts) {
    if (posts.score >= 100) {
        return posts;
    }
    return null;
}

function makeObject(posts) {
    var result = new Object();
    result.URL = posts.url;
    result.Score = posts.score;

    return result;
}

function sortPostsByScore(a, b) {
    return b.Score - a.Score;
}

function displayPosts(result) {
    console.log("Displaying HOT posts with score >= 100:")
    console.log(JSON.parse(JSON.stringify(result)));
}



