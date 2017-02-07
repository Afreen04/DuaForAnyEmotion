'use strict';
var Alexa = require('alexa-sdk');
var util = require('util');

var duaArr = [
                {"emotion" : ["anger","angriness"],
                 "dua" : "Oh Allah, remove anger from my heart."
                },
                {
                 "emotion" : ["anticipation","anticipated"],
                 "dua" : "Oh Allah, if my intended action is best for me, make it destined and easy for me, and grant me Your Blessings in it."
                },
                {
                 "emotion" : ["anxiety","anxious"],
                 "dua" : "Oh Allah, Reliever of anxiety, Remover of distress, Dispeller of grief! Remove my anxiety, distress, and dispel from me my sadness."
                },
                {
                 "emotion" : ["arousal","aroused"],
                 "dua" : "Oh Allah shield me from harmful desires! Shield me from looking at the prohibited! Shield me from my rebellions! And shield me from trials oh Lord of the Universes!"
                },
                {
                 "emotion" : ["confidence","confident"],
                 "dua" : "Oh Lord! When you give me wealth, do not take away my happiness. When you give me strength, do not take away my intelligence. When you give me victory, do not take away my humility. When you give me humility, do not take away my dignity."
                },
                {
                 "emotion" : ["confusion","confused"],
                 "dua" : "Oh Allah! Place in my heart, Light. Place in my tongue, Light. Place in my hearing, Light. Place in my sight, Light. Place behind me, Light. Place before me, Light. Place above me, Light. Place under me, Light. Oh Allah grant me Light!"
                },
                {
                 "emotion" : ["contentment","content"],
                 "dua" : "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you."
                },
                {
                 "emotion" : ["curiosity","curious"],
                 "dua" : "Oh Allah, I seek protection in you from the evil of my hearing, from the evil of my sight, from the evil of my tongue, from the evil of my heart, and from the evil of myself."
                },
                {
                 "emotion" : ["defeat","hopeless","hopelessness","defeated"],
                 "dua" : "O Allah, I have been very unjust to myself and no one grants pardon against sin but You, therefore forgive me with Your forgiveness and have mercy on me. Surely, You are the forgiver, the Merciful."
                },
                {
                 "emotion" : ["depression","depressed"],
                 "dua" : "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men."
                },
                {
                 "emotion" : ["desirous","desire"],
                 "dua" : "Oh Allah! Extinguish the fire of desires in my heart and redirect my heart to all that which pleases you."
                },
                {
                 "emotion" : ["desperation","desperate"],
                 "dua" : "To You, my Lord, I complain of my weakness, lack of support and the humiliation I am made to receive. Most Compassionate and Merciful! You are the Lord of the weak, and you are my Lord."
                },
                {
                 "emotion" : ["determination","determined"],
                 "dua" : "Oh Allah! Grant me the strength to oppose myself, the courage to face my weakness, the conviction to accept my faith, the satisfaction of to relax my mind, and the understanding to reassure my heart."
                },
                {
                 "emotion" : ["disbelief"],
                 "dua" : "Oh Allah fill my heart with your love."
                },
                {
                 "emotion" : ["doubt","doubtful","doubtfulness"],
                 "dua" : "Oh Allah, if my intended action is best for me, make it destined and easy for me, and grant me Your Blessings in it."
                },
                {
                 "emotion" : ["envy","envious","enviousness"],
                 "dua" : "Oh Allah, clean away all forms of evil from my heart. Oh Allah, clean my heart and remove everything that displeases you. Oh Allah, clean my heart of all every form of bitterness, hard feelings, and jealousy."
                },
                {
                 "emotion" : ["gratefulness","grateful"],
                 "dua" : "Oh Allah thanking you is a blessing, you deserve all thankfulness. All praise is due to Allah the way He should his magnificence deserves to be praised."
                },
                {
                 "emotion" : ["guilt","guilty"],
                 "dua" : "Oh Lord, wipe my chest clean with your mercy."
                },
                {
                 "emotion" : ["happiness","happy"],
                 "dua" : "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you."
                },
                {
                 "emotion" : ["hate","hatred"],
                 "dua" : "Oh Allah, don't let the hate of anyone reside in my heart."
                },
                {
                 "emotion" : ["humiliation","humiliated"],
                 "dua" : "To You, my Lord, I complain of my weakness, lack of support and the humiliation I am made to receive. Most Compassionate and Merciful! You are the Lord of the weak, and you are my Lord."
                },
                {
                 "emotion" : ["hurt"],
                 "dua" : "Oh Allah, don't let my weak heart get attached with what's not mine."
                },
                {
                 "emotion" : ["impatience","impatient"],
                 "dua" : "Oh The Most Patient, enable me to be patient upon whatever you afflict and test me with."
                },
                {
                 "emotion" : ["indecision","indecisiveness","indecisive"],
                 "dua" : "Oh Allah, if my intended action is best for me, make it destined and easy for me, and grant me Your Blessings in it."
                },
                {
                 "emotion" : ["insecurity","insecure"],
                 "dua" : "Oh Allah, make me see the talents and strengths you have put inside of me."
                },
                {
                 "emotion" : ["irritation","irritated"],
                 "dua" : "Oh Allah, clean away all forms of evil from my heart. Oh Allah, clean my heart and remove everything that displeases you. Oh Allah, clean my heart of all every form of bitterness, hard feelings, and jealousy."
                },
                {
                 "emotion" : ["jealousy","jealous"],
                 "dua" : "Oh Allah, clean away all forms of evil from my heart. Oh Allah, clean my heart and remove everything that displeases you. Oh Allah, clean my heart of all every form of bitterness, hard feelings, and jealousy."
                },
                {
                 "emotion" : ["laziness","lazy"],
                 "dua" : "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men."
                },
                {
                 "emotion" : ["loneliness","lonely"],
                 "dua" : "O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for a blink of an eye, and rectify for me all of my affairs. None has the right to be worshiped except You."
                },
                {
                 "emotion" : ["love"],
                 "dua" : "Oh Allah make me from amongst the pure men and grant me from the pure women."
                },
                {
                 "emotion" : ["nervousness","nervous"],
                 "dua" : "Oh lord, expand my chest, ease my affair, and untie the knot in my tongue and perfect my expression."
                },
                {
                 "emotion" : ["nostalgia","nostalgic"],
                 "dua" : "Oh Allah, don't let my weak heart get attached with what's not mine."
                },
                {
                 "emotion" : ["offense","offended"],
                 "dua" : "Oh Allah! I seek your shelter from worries that sadden me, thoughts that make me restless, information that bothers me, and people that intend bad for me."
                },
                {
                 "emotion" : ["overwhelmed"],
                 "dua" : "To You, my Lord, I complain of my weakness, lack of support and the humiliation I am made to receive. Most Compassionate and Merciful! You are the Lord of the weak, and you are my Lord."
                },
                {
                 "emotion" : ["peace","peaceful"],
                 "dua" : "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you."
                },
                {
                 "emotion" : ["rage", "rageful"],
                 "dua" : "Oh Allah, remove anger from my heart."
                },
                {
                 "emotion" : ["regret","regretful"],
                 "dua" : "O Allah, I have been very unjust to myself and no one grants pardon against sin but You, therefore forgive me with Your forgiveness and have mercy on me. Surely, You are the forgiver, the Merciful."
                },
                {
                 "emotion" : ["sadness","sad"],
                 "dua" : "Oh Allah, Reliever of anxiety, Remover of distress, Dispeller of grief! Remove my anxiety, distress, and dispel from me my sadness."
                },
                {
                 "emotion" : ["satisfaction","satisfied"],
                 "dua" : "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you."
                },
                {
                 "emotion" : ["uncertainty","uncertain"],
                 "dua" : "Oh Allah wash away my negativity."
                },
                {
                 "emotion" : ["unease","uneasiness","uneasy"],
                 "dua" : "Oh Allah, descend upon me satisfaction that comes from you and open my chest and protect my heart with it."
                },
                {
                 "emotion" : ["weakness","weak"],
                 "dua" : "Oh, Allah, I appeal to you for the weakness in my strength, and my limited power, and the treatment of contempt and humiliation from people. To you, the most Merciful of all the Merciful ones, you are the Lord of the oppressed, and you are my Lord."
                }
                ];


// Messages used for Alexa to tell the user
var repeatWelcomeMessage = "You can ask for a Dua for a particular emotion or you can ask for a random Dua. What would you like to do?";

var welcomeMessage = "Welcome to my Dua, " + repeatWelcomeMessage;

var stopSkillMessage = "Goodbye!";

var helpText = "You can say things like 'Get me a Dua for sadness', 'dua for happiness' or just 'Tell me a Dua'. What would you like to do?";

var tryLaterText = "Please try again later."

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
   
    alexa.registerHandlers(handlers);
    alexa.execute();
    //context.done();
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
        var randomDua = duaArr[duaIndex]["dua"];
        var randomEmotion = duaArr[duaIndex]["emotion"][0];

        // Create speech output
        var speechOutput = "Here is your Dua for '"+ randomEmotion +"',........ " + randomDua;
        this.emit(':ask', speechOutput + ". What would you like to do next?", helpText);
    },
    'getSpecificDuaIntent': function(){
        var emotion = String(this.event.request.intent.slots.emotion.value);
        for(var i =0;i<duaArr.length;i++)
        {
            for(var j=0;j<duaArr[i]["emotion"].length;j++)
            {
                if(emotion == duaArr[i]["emotion"][j])
                {
                    var duaForEmotion = duaArr[i]["dua"];
                    var speechOutput = "Here is your Dua for '"+ emotion +"',........ " + duaForEmotion;
                    this.emit(':ask', speechOutput + ". What would you like to do next?", helpText);
                } 
            }
        }
        this.emit(':ask', "Sorry, the dua for this emotion is not available. What would you like to do next? ", helpText);
    },
    'goodbyeIntent' : function()
    {
        this.emit(':tell', stopSkillMessage);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', helpText, helpText);
    },
    'AMAZON.CancelIntent': function () {
        // Triggered when user asks Alexa top cancel interaction
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