var lyrics = [
    "This",
    "hit",
    "that",
    "ice",
    "cold",
    "Michelle",
    "Pfeiffer",
    "that",
    "white",
    "gold",
    "This",
    "one",
    "for",
    "them",
    "hood",
    "girls",
    "Them",
    "good",
    "girls",
    "straight",
    "masterpieces",
    "Stylin'",
    "whilen'",
    "livin'",
    "it",
    "up",
    "in",
    "the",
    "city",
    "Got",
    "Chucks",
    "on",
    "with",
    "Saint",
    "Laurent",
    "Gotta",
    "kiss",
    "myself",
    "I'm",
    "so",
    "pretty"
]
function getString() {
    lyrics.join(" ");
    return lyrics;
    console.log(lyrics)
}
getString();

function reverse() {
    lyrics.reverse(" ");
    return lyrics;
}

function everyOther() {
    // Function 3 here
}

// DO NOT change anything in this array


module.exports = {
    getString,
    reverse,
    everyOther
}
