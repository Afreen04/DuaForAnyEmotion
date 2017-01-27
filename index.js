var duaArr = [
                "A year on Mercury is just 88 days long.",
                "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
                "Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.",
                "On Mars, the Sun appears about half the size as it does on Earth.",
                "Earth is the only planet not named after a god.",
                "Jupiter has the shortest day of all the planets.",
                "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
                "The Sun contains 99.86% of the mass in the Solar System.",
                "The Sun is an almost perfect sphere.",
                "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
                "Saturn radiates two and a half times more energy into space than it receives from the sun.",
                "The temperature inside the Sun can reach 15 million degrees Celsius.",
                "The Moon is moving approximately 3.8 cm away from our planet every year."
            ];

'use strict';
var Alexa = require('alexa-sdk');
var util = require('util');

// Messages used for Alexa to tell the user
var repeatWelcomeMessage = "You can ask for a Dua for a particular emotion or you can ask for a random Dua.";

var welcomeMessage = "Welcome to my Dua, " + repeatWelcomeMessage;

var stopSkillMessage = "Allah Hafiz!";

var helpText = "You can say things 'Get me a Dua for anger' or just 'Tell me a Dua'. What would you like to do?";

var tryLaterText = "Please try again later."

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    //alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
    context.done();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('NewSession');
    },
    'GetNewDuaIntent': function () {
        this.emit('GetDua');
    },
    'NewSession': function() {
        
            this.emit(':ask', welcomeMessage, repeatWelcomeMessage);
        
    },

    'GetDua': function () {
        
        var duaIndex = Math.floor(Math.random() * duaArr.length);
        var randomDua = duaArr[duaIndex];

        // Create speech output
        var speechOutput = "Here is your Dua, " + randomDua;
        this.emit(':ask', speechOutput, "What would you like to do next?");
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', helpText, helpText);
    },
    'AMAZON.CancelIntent': function () {
        // Triggered wheen user asks Alexa top cancel interaction
        this.emit(':tell', stopSkillMessage);
    },

    'AMAZON.StopIntent': function () {
        // Triggered when user asks Alexa to stop interaction
        this.emit(':tell', stopSkillMessage);
    },// Triggered when no intent matches Alexa request
    'Unhandled': function () {
        this.emit(':ask', helpText, helpText);
    }
};