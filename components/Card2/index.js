import styles from './Card2.module.css'
export default function Card({
    breed = "none",
    colour = "bisque",
    font = "0",
    fontColour = "brown",
    image = "icon/cat.png",
    ageCat = 0,
    name = ""
}) {
    return (
        <div style={{
            backgroundColor: colour,
            fontSize: font,
            color: fontColour,
            width: "490px",
            padding: "32px",
            margin: "20px",
            fontWeight: "bold",
            border: "4px solid",
            display: "flex",
            alignItems: "center",
            borderRadius: "1000px",
        }}>
            {
                colour === "none" ? <img src={'icon/cat.png'} width='50' /> :
                    colour === "none" ? <img src={'icon/cat.png'} width='50' /> :
                        <img src={image} width='50' className={styles.image__area} />
            }

            {name + " is a "}
            {ageCat + " year old; "}
            {breed + " cat"}
        </div >
    )
}