import HeadShotImg from './assets/headshot.jpg'
import GameBacklogImg from './assets/GameBacklog.jpg'
import CalculatorImg from './assets/Calculator.jpg'

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

const AppList = [
    new AppTile("About me", "I'm Jeremy", HeadShotImg, [
        'https://jeremyhelsel.com/',
    ]),

    new AppTile("Game Backlog Tracker", "Filler Description", GameBacklogImg, [
        'https://VideoGameBacklog.com/'
    ], "Game Backlog"),

    new AppTile("Calculator", "A calculator made with React and Tailwind.", CalculatorImg, [
        'https://helsel-react-calculator.netlify.app/',
        'https://github.com/JIH7/react-tailwind-calculator'
    ])
]

export default AppList

//ToDo: Research headless CMS