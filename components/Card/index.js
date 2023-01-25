import styles from './Card.module.css'
export default function Card({
    colour = "bisque",
    font = "0",
    fontColour = "brown",
    image = "icon/cat.png",
    city = "Ontario",
    name = "none"
}) {
    return (
        <div style={{
            backgroundColor: colour,
            fontSize: font,
            color: fontColour,
            width: "420px",
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

            {name}
            {" is from " + city}

        </div >
    )
}