/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = []

notes.push({
    id: 1,
    date: "8/18/22",
    author: "the author",
    topics: ["some topics", "some more topics"],
    texts: "some text"
})

notes.push({
    id: 2,
    date: "8/19/22",
    author: "Another Author",
    topics: ["some topics", "some other cool topics", "topics, oh my"],
    texts: "the text"
})

notes.push({
    id: 3,
    date: "8/20/22",
    author: "Some Other Author",
    topics: ["whoomp, there it is"],
    texts: "whatever I want"
})

notes.push({
    id: 4,
    date: "8/21/22",
    author: "Arthur",
    topics: ["I don't know"],
    texts: "so much text"
})

// console.log("*** All Note Topics ***")
// for (const note of notes){
//     for (topic of note.topics){
//         console.log(topic)
//     }
// }

console.log("*** Average Topics Per Note ***")
// total number of topics. needs to start at 0//
let totalTopics = 0
//iterate through notes array to count topics//
for (const note of notes) {
    for (topic of note.topics)

        totalTopics++
    //add up to total topics//

}
//divide total topics by the length of the notes array (number of notes)//
totalTopics = totalTopics / notes.length
console.log(totalTopics)

const filteredNotes = []
const criteria = "some topics"

/* iterate through notes array to see notes that contain "some topics," using .includes*/
for (const note of notes){
    if (note.topics.includes(criteria)){
        filteredNotes.push(note)
    }
}
console.log(filteredNotes)

/*if they contain "some topics", push to the filteredNotes array*/

/* iterate through notes array*/
/*access the value of the texts key*/
/*console log the value between "<article></article>"*/
// empty string assigned to topicString.
// iterate through the topics 
// console log each topic wrapped in  <section>
// each topic has to be on a new line
console.log("***  Note Articles  ***")
let topicString = ""
for (const note of notes){
    topicString += `<article>
       ${note.texts}`
    for (const topic of note.topics){
        topicString += `\n   <section>${topic}</section>`
    }
    topicString += '\n</article>\n'}
        console.log(topicString)

