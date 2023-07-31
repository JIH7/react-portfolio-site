import HeadShotImg from './assets/headshot.jpg'
import DiceToMeetYou from './assets/dicetomeetyou.jpg'
import GameBacklogImg from './assets/GameBacklog.jpg'
import CalculatorImg from './assets/Calculator.jpg'
import LandingPage from './assets/ManageLanding.jpg'

class AppTile{
    constructor(name, description, image, links,  shortName) {
        this.name = name

        //ToDo: Examine if this is necessary
        if (shortName === undefined) {
            this.shortName = false
        } else {
            this.shortName = shortName
        }

        this.description = description
        this.image = image
        this.links = links
    }
}

class LinkInfo{
    constructor(linkAdress, linkName) {
        this.linkAdress = linkAdress
        this.linkName = linkName
    }
}

const AppList = [

    new AppTile("Game Backlog Tracker", "This is my first full stack application with authentication. The user enters a list of video games stored to their unique account. Games can be marked as completed and stats from HowLongToBeat.com can be viewed. This app runs a NodeJS backend with the Express frameowrk. Passport is used for authentication and MongoDB with Mongoose is used for account and game lists.", GameBacklogImg, [
        new LinkInfo('https://VideoGameBacklog.com/', 'Live website'),
        new LinkInfo('https://github.com/JIH7/game-backlog-mvc', "Source Code"),
    ], "Game Backlog"),

    new AppTile("About me", "My name is Jeremy and I'm a Chicago based web developer with a focus on implementing front end designs and expirience building full stack web applications. I also dabble in game development, participating in the GMTK game jam every year with a few other developers.", HeadShotImg, [
        new LinkInfo('https://github.com/JIH7/react-portfolio-site', "Source for this website"),
    ]),

    new AppTile("Calculator", "A calculator made with React and Tailwind. This was based on a Frontend Mentor challenge which I had completed in the past. I wasn't too happy with the original version so I decided to redo it and use it as an oppurtunity to learn React. This was also my second time using Tailwind, and I find the pair to be incredibly powerful together. I find that coupling style with the components makes for a great workflow and makes it very easy to maintain my code. I liked the combination so much I continued using it for this portfolio site.", CalculatorImg, [
        new LinkInfo('https://helsel-react-calculator.netlify.app/', 'Live website'),
        new LinkInfo('https://github.com/JIH7/react-tailwind-calculator', 'Source Code')
    ]),

    new AppTile("Dice To Meet You", "Dice to Meet You is a puzzle game originally made for the Game Maker's Toolkit 2022 game jam.", DiceToMeetYou, [
        new LinkInfo('https://morrilet.itch.io/dice-to-meet-you', 'Game website'),
    ]),

    new AppTile("Sample Landing Page", "A sample landing page made with Tailwind. This was a Frontend Mentor challenge and my first forray into Tailwind.", LandingPage, [
        new LinkInfo('https://helsel-basic-landing-page.netlify.app/', 'Live website'),
        new LinkInfo('https://github.com/JIH7/managelandingpage', 'Source Code')
    ], 'Landing Page'),

    
]

export default AppList