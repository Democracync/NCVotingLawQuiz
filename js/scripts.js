// New NC Voting Law Quiz
// Democracy North Carolina

var qGenerator = [];

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

for(var i = 0; i <= 14; i++) { // second number is the total number of questions available (minus one). Should match the number of entries (indexes) in the quiz array (minus one)
  qGenerator.push(i);
}
var myQuestions = shuffle(qGenerator).splice(0, 5); // an array with 5 random numbers varying from 1-15

//Questions and answers. Total is 15; if more added, change the second "i" on for loop above
var quiz = [
        {//1
            "question" : "When will the photo ID requirement be implemented?",
            "choice0" : "November 2015",
            "choice1" : "January 2016",
            "choice2" : "November 2016",
            "choice3" : "It was implemented in 2014",
            "correct" : "1",
            "explanation" : "The photo ID requirement begins in January 2016. This year, poll workers may ask if you have one, but you don’t have to show it or have it on you to cast a vote until next year.",
        },
        {//2
            "question" : "Which of the following will NOT be accepted as a photo ID?",
            "choice0" : "Passport",
            "choice1" : "Learner’s permit",
            "choice2" : "Student ID",
            "choice3" : "Veteran’s ID",
            "correct" : "2",
            "explanation" : "No student IDs will be accepted as photo ID. Think they should be? Sign our petition <a target='_blank' href='http://demnc.co/studentvote'>here</a>. Learn more about the photo ID requirement at <a target='_blank' href='http://www.gotidnc.com'>gotidnc.com</a>.",
        },
        {//3
            "question" : "In order to vote on Election Day, when do you need register?",
            "choice0" : "30 days before Election Day",
            "choice1" : "25 days before Election Day",
            "choice2" : "14 days before Election Day",
            "choice3" : "You can register during Early Voting.",
            "correct" : "1",
            "explanation" : "You can no longer register and vote on the same day, so make sure you register at your current address (very important!) with plenty of time left before the election.",
        },
        {//4
            "question" : "On Election Day, your ride to the polls falls through, and you can’t make it to your home precinct in time. You can:",
            "choice0" : "Vote at any polling place in your county",
            "choice1" : "Send in a last-minute absentee ballot",
            "choice2" : "Vote anywhere in the state",
            "choice3" : "None of the above",
            "correct" : "3",
            "explanation" : "Ballots cast in the wrong precinct on Election Day won’t be counted, so make sure you vote in your home precinct if you’re voting on Election Day.",
        },
        {//5
            "question" : "To apply for a free government-issued Voter ID, voters must provide:",
            "choice0" : "Proof of employment and income",
            "choice1" : "Social security card and phone number",
            "choice2" : "Proof of identity and residence",
            "choice3" : "Voter registration card",
            "correct" : "2",
            "explanation" : "You’ll have to show an identity document (birth certificate, maybe a marriage license, or passport) and something that has your address on it. If you were born in-state, you can get a free birth certificate from a Register of Deeds, but you’ll have to find another way to get it if you were born out-of-state.",
        },
        {//6
            "question" : "Under what circumstances can a voter request a mail-in absentee ballot?",
            "choice0" : "Voters do not need a reason to request an absentee ballot",
            "choice1" : "Only military personnel can request an absentee ballot",
            "choice2" : "Only seniors can request an absentee ballot",
            "choice3" : "None of the above",
            "correct" : "0",
            "explanation" : "You don’t need any special  reason to vote by mail-in absentee. But you will need the signatures of 2 witnesses who are over 18 on the completed mail-in ballot.",
        },
        {//7
            "question" : "Outside political groups that operate and spend independently of candidates and their committees must:",
            "choice0" : "Report spending within 24 hours",
            "choice1" : "Do nothing",
            "choice2" : "Not spend more than $1,000",
            "choice3" : "A and C",
            "correct" : "1",
            "explanation" : "The Monster Law changed the rules in NC for spending on elections by outside groups, basically making it easier for them to spend more on elections and tell you less about the political agenda driving that spending.",
        },
        {//8
            "question" : "During the Early Voting period, you can <em>not</em>:",
            "choice0" : "Vote at any Early Voting site in the county",
            "choice1" : "Vote at your home precinct",
            "choice2" : "A and B",
            "choice3" : "Register and vote on the same day",
            "correct" : "3",
            "explanation" : "Early Voting sites are different from Election Day precincts, so unless your home precinct is also an Early Voting site, you won’t be able to vote early at your home precinct. And, in January 2014, we said goodbye to Same-Day Registration – you can no longer register and vote on the same day during Early Voting. But you can <em>update</em> your registration address or name (as long you’re still in the same county) when you go vote early or on Election Day.",
        },
        {//9
            "question" : "Who is exempt from the voter ID requirement?",
            "choice0" : "Voters who have a religious objection to being photographed",
            "choice1" : "Voters who use curbside voting",
            "choice2" : "A and B",
            "choice3" : "None of the above",
            "correct" : "2",
            "explanation" : "A majority of voters will <strong>not</strong> be exempt from the photo ID requirement. If you are, however, you’ll still have to show some kind of document with your name and current address on it &mdash; like, a utility bill, paycheck, etc.",
        },
        {//10
            "question" : "Corporate donations to political parties for “maintaining their buildings” can now also be used to pay for:",
            "choice0" : "Staff salaries",
            "choice1" : "Travel and fundraising",
            "choice2" : "Campaign supplies",
            "choice3" : "All of the above",
            "correct" : "3",
            "explanation" : "Corporate money can now fund way more of a political party’s activities than it could before January 2014.",
        },
        {//11
            "question" : "Outside groups have to list who gave them money on:",
            "choice0" : "Print ads",
            "choice1" : "Mailers",
            "choice2" : "Broadcast ads",
            "choice3" : "None of the above",
            "correct" : "3",
            "explanation" : "When you see a nasty campaign ad, you may not see who’s really behind it. Outside groups can use money from almost any source to fund those “electioneering” activities.",
        },
        {//12
            "question" : "In order for a mail-in absentee ballot to be counted, it will have to:",
            "choice0" : "Have two witness signatures OR one notary stamp and signature",
            "choice1" : "Be in the envelope provided",
            "choice2" : "Be mailed in or dropped off to an Early Voting site by you or an immediate family member",
            "choice3" : "Have the voter’s signature",
            "choice4" : "All of the above",
            "correct" : "4",
            "explanation" : "Remember, if you vote by mail, your ballot must be postmarked by Election Day. Alternatively, you can hand-deliver to your local Board of Elections. For more information on absentee voting, check out <a target='_blank' href='http://www.ncelectionconnection.com/voting-in-nc/absentee-ballot/'>ncelectionconnection.com/voting-in-nc/absentee-ballot/</a>.",
        },
        {//13
            "question" : "You recently moved to a new home, but you haven’t updated your voter registration. Election Day is tomorrow. Which of the following statements about your vote is true? ",
            "choice0" : "If you moved within the same county, you can update your registration to reflect your new address when you go to vote.",
            "choice1" : "If you moved within the same county less than 30 days ago, you can still vote at your designated precinct. ",
            "choice2" : "If you moved to a different NC county more than 30 days ago, you cannot vote. ",
            "choice3" : "All of the above. ",
            "correct" : "3",
            "explanation" : "Remember, if you move to a different county, it’s VERY important that you update your voter registration as soon as possible to avoid being turned away at the polls. If you move within the same county, you can update your address at the polls – but might have to vote somewhere other than your previous polling place depending on how recently you moved.",
        },
        {//14
            "question" : "TV ads under the new law require:",
            "choice0" : "The candidate to appear in the ad saying he/she approves the message",
            "choice1" : "A small photo of the candidate to appear for two seconds",
            "choice2" : "A list of donors to be displayed",
            "choice3" : "The sponsoring organization's CEO to appear",
            "correct" : "1",
            "explanation" : "The Monster Law ended NC’s “Stand By Your Ad” policy, which required candidates to appear in broadcast ads and state their approval of it. Now, only a candidate photo is required on TV ads, but no similar requirements exist for radio ads.",
        },
        {//15
            "question" : "The Monster Law allows more poll observers in polling places. Poll observers can:",
            "choice0" : "Make observations in the voting enclosure",
            "choice1" : "Challenge your vote",
            "choice2" : "Take down your name and address",
            "choice3" : "All of the above",
            "correct" : "3",
            "explanation" : "Poll observers monitor polling places during elections, but they are not allowed to talk to you, enter the booth, or attempt to assist you. If you encounter any problems with a poll observer, call 1-888-OUR-VOTE.",
        },


    ];

var currentQuestion = 0;          // Holds the current question number. Started at 0 so they match up with the array in myQuestions (so question one is array index 0)
var myScore = 0;

// this function is called from the for loop in the showQuestions function. It checks whether answer is correct, then makes the .explainBox visible and gives it a color, and shows the
// next question or end quiz button
function checkAnswer(){
  var f = currentQuestion;
  var g = myQuestions[f];
  var isCorrect = 0;                                // Holds number of correct answers
  var box = document.getElementById("explainBox");  // so I can make the explanation box visible
  var answer = this.getAttribute("data-index");     // gets the data-index attribute to check whether it's the right answer
  var thisAns = quiz[g]["correct"];                 // this is the correct answer
  var thisButton = document.getElementById(answer); // gest the ID of the button to add the check mark if answer is right/wrong

  thisButton.removeEventListener('click', checkAnswer);

  document.getElementById("explanation").innerHTML = quiz[g]["explanation"];    // Loads the explanation into the box

  if (answer == thisAns){   // If their answer is correct
    document.getElementById("right-wrong").innerHTML = "Correct! "
    box.style.visibility = "visible";
    box.className = "right";
    thisButton.className = "quizAnswer checkMark";
    myScore ++;
    for (var m = 0; m <= 3; m++){     // This loop makes all the boxes visible again
        if (m == answer) continue;    // Skips correct answer and moves on to the next
        var notPicked = document.getElementById(m);
        notPicked.style.display = "none";
    }
  } else {            // If their answer is incorrect. Basically same loop as above, just slightly different things. I know, I'm not supposed to repeat myself. Bleh.
      document.getElementById("right-wrong").innerHTML = "Oops. Wrong.  "
      box.style.visibility = "visible";
      box.className = "wrong";
      thisButton.className = "quizAnswer xMark";
      for (var m = 0; m <= 3; m++){
          if (m == answer) continue;
          var notPicked = document.getElementById(m);
          notPicked.style.display = "none";
      }
  }

  var nextButton = document.getElementById("nextButton");         // Assigns the ID nextButton to this variable so we can manipulate it
  var finishButton = document.getElementById("finishButton");     // Same for finishButton
  if (f != 4){
    nextButton.style.visibility = "visible";
    nextButton.style.display = "block";
  } else {
    finishButton.style.visibility = "visible";
    finishButton.style.display = "block";
  }

  currentQuestion ++;
}

// This loads the first question. It generates the <p> that holds the question, as well as all the buttons. These same elements will be reused for each question is answered
function showQuestion () {
  var f = currentQuestion;
  var g = myQuestions[f];
  document.write('<p class="q" id="question">' + quiz[g]["question"] + '</p>')    // Generates the <p> with first question

  for (i = 0; i <= 3; i++){       // Go through and add each button, grabbing the answers from the quiz array (choice0-3)
    var aletter = String.fromCharCode(97 + i);
    document.write('<button class="quizAnswer" id="' + i + '" data-index="' + i + '">' + quiz[g]["choice"+i] + '</button>');  // ***** See note below *****
    var ansBtn = document.getElementById(i);         // This gets the button (buttons' IDs are 0-3), puts in into the ansBtn variable
    ansBtn.addEventListener('click', checkAnswer);   // Makes buttons trigger checkAnswer function when clicked
  }
}

// The following code adds a letter to the beginning of each answer. But it makes some of the answers too long, and I don't want them to wrap around, so I'm leaving it out
// + aletter + ".&nbsp;&nbsp;"


// Not sure if this is the best way to do this. Grabbing all the elements (question, answers, next question button, explain box) and reveting to their original state,
// then reloading them with the next question using inner.HTML. If for some odd reason you're looking at this and have a better way, let me know: gabe[at]democracy-nc.org.
function nextQuestion() {
  var f = currentQuestion;
  var g = myQuestions[f];

  document.getElementById("questionNumber").innerHTML = f + 1;    // Advance the Question number at the top. +1 because currentQuestion starts at 0

  var newQuestion = quiz[g]["question"];  // assigning the next question to this variable so it can be passed to #question
  document.getElementById("question").innerHTML = newQuestion; // This replaces the question text

// This next loop goes through each answer button and replaces the text, makes them all visible, and clears their background image (so there's not x or check on them)
  for (j = 0; j <= 3; j++){
    var newAnswer = quiz[g]["choice"+j];
    var newAnswerButton = document.getElementById(j);
    newAnswerButton.innerHTML = newAnswer;
    newAnswerButton.style.display = "block";
    newAnswerButton.className = "quizAnswer noMark";
    newAnswerButton.addEventListener('click', checkAnswer);   // Makes buttons trigger checkAnswer function when clicked (again). This is necessary because the checkAnswer function removes the click event listener from the chosen answer
  }

  document.getElementById("nextButton").style.visibility = "hidden";    // hides the next button
  document.getElementById("nextButton").style.display = "none";    // hides the next button
  document.getElementById("explainBox").style.visibility = "hidden";    // hides the explanation box

}
// After last question, the "score" button will take to a new page (score.html), and pass the score as a query string.

function finishQuiz() {
  var scoreURL = document.getElementById("finishButton").href;
  var score = myScore;
  var URLappend = "?" + score;
  console.log ("End of quiz");
  document.getElementById("finishButton").href = scoreURL + URLappend;
}

// Score page stuff starts here:

var queryString = window.location.search;     // Gets the page URL
var yourScore = queryString.substring(1);     // Gets the substring (aka the score, passed from the quiz page)

// get score, subtract it from 5, print the # of correct and incorrect responses to #correctNumber and #incorrectNumber

function printScore() {
  var numberRight = yourScore;
  var numberWrong = 5 - numberRight;

  document.getElementById("correctNumber").innerHTML = numberRight;
  document.getElementById("incorrectNumber").innerHTML = numberWrong;
}

// based on the score, print out hashtags
function printHashtag() {
  var score = yourScore;
  var hashtag = document.getElementById("myHashtag");

  if (score == 5){
    hashtag.className = "greenText";
    hashtag.innerHTML = "#winning";
  } else if (score == 4) {
    hashtag.className = "greenText";
    hashtag.innerHTML = "#prettygood"
  } else if (score == 3) {
    hashtag.className = "greenText";
    hashtag.innerHTML = "#justokay"
  } else if (score == 2) {
    hashtag.innerHTML = "#soclose"
  } else if (score == 1) {
    hashtag.innerHTML = "#struggling"
  } else if (score == 0) {
    hashtag.innerHTML = "#ouch"
  }

}

// based on the score, change color of #encourageBox and print the "analysis" of the score (haha)

function resultAnalysis() {
  var score = yourScore;
  var analysisBox = document.getElementById("analysisBox");
  var analysisMessage = document.getElementById("analysisMessage");

  if (score == 5){
    analysisBox.className = "right";
    analysisMessage.innerHTML = 'Perfect score. Impressive! Not that you need it, but you can learn more about the new law <a href="http://www.democracy-nc.org/downloads/NewVotingLawSummaryAug2013.pdf" target="_blank">here</a>. Feeling lucky? <a href="quiz.html">Take the quiz again!</a>';
  } else if (score == 4) {
    analysisBox.className = "right";
    analysisMessage.innerHTML = 'You did pretty good! Just to be sure, you should read more about the law <a href="http://www.democracy-nc.org/downloads/NewVotingLawSummaryAug2013.pdf" target="_blank">here</a>, and <a href="quiz.html">take the quiz again</a>!'
  } else if (score == 3) {
    analysisBox.className = "right";
    analysisMessage.innerHTML = 'I mean, not great, but not terrible. Maybe you should read more about the law <a href="http://www.democracy-nc.org/downloads/NewVotingLawSummaryAug2013.pdf" target="_blank">here</a>, then <a href="quiz.html">take the quiz again</a>...'
  } else if (score == 2) {
    analysisMessage.innerHTML = 'Hm. Two out of three. Well, it could have been worse. Don’t despair! You can <a href="http://www.democracy-nc.org/downloads/NewVotingLawSummaryAug2013.pdf" target="_blank">study up</a> and <a href="quiz.html">take the quiz again</a>!'
  } else if (score == 1) {
    analysisMessage.innerHTML = 'That could have gone better, huh? Maybe you should take a minute to <a href="http://www.democracy-nc.org/downloads/NewVotingLawSummaryAug2013.pdf" target="_blank">read more</a> about the law and <a href="quiz.html">take the quiz again</a>?'
  } else if (score == 0) {
    analysisMessage.innerHTML = 'We need to talk. Your score was, well, pretty bad. Maybe you should consider <a href="http://www.democracy-nc.org/downloads/NewVotingLawSummaryAug2013.pdf" target="_blank">reading more</a> about the law and <a href="quiz.html">taking it again</a>?'
  }

}
