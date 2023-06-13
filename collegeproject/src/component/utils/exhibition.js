import Photography from "../../Images/PhotographyExhibition.jpeg"
import Art from "../../Images/Exhibition1.jpg"
import StartUp from "../../Images/Exhibition2.png"


export const ExhibitionEvent = [
    {
        id: 0,
        date: 31,
        mon: `jun`,
        img: Photography,
        title: `Photography Exhibition `,
        price: 500,
        Location: "Bengalore",
        timming: `june 31 2023`,
        showTime: ` 7:00pm - 1:00pm`,
        type: "Exhibition"
    },
    {
        id: 1,
        date: 31,
        mon: `july`,
        img: Art,
        title: `Art Expo`,
        price: 500,
        Location: "Mumbai",
        timming: `july 3 2023`,
        showTime: ` 7:00pm - 1:00pm`,
        type: "Exhibition"
    },
    {
        id: 2,
        date: 31,
        mon: `Aug`,
        img: StartUp,
        title: `World Startup Expo`,
        price: 500,
        Location: "Mumbai",
        timming: `Aug 1 2023 `,
        showTime: ` 7:00pm - 1:00pm`,
        type: "Exhibition"
    }
]