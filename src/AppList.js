import HeadShotImg from './assets/headshot.jpg'
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
    new AppTile("About me", "Insert bio here", HeadShotImg, [
        new LinkInfo('https://github.com/JIH7/react-portfolio-site', "Source for this website"),
    ]),

    new AppTile("Game Backlog Tracker", "Filler Description", GameBacklogImg, [
        new LinkInfo('https://VideoGameBacklog.com/', 'Live website'),
        new LinkInfo('https://github.com/JIH7/game-backlog-mvc', "Source Code"),
    ], "Game Backlog"),

    new AppTile("Calculator", "A calculator made with React and Tailwind.", CalculatorImg, [
        new LinkInfo('https://helsel-react-calculator.netlify.app/', 'Live website'),
        new LinkInfo('https://github.com/JIH7/react-tailwind-calculator', 'Source Code')
    ]),

    new AppTile("Sample Landing Page", "A sample landing page made with Tailwind.", LandingPage, [
        new LinkInfo('https://helsel-basic-landing-page.netlify.app/', 'Live website'),
        new LinkInfo('https://github.com/JIH7/managelandingpage', 'Source Code')
    ], 'Landing Page')
]

export default AppList

//ToDo: Research headless CMS