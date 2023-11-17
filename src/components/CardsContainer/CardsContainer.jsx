import Link from "next/link"
import Card from "../Card/Card"
import Modal from "../Modal/Modal"

function obtenerCharacters(character) {
    return fetch(`${character}`, { cache: 'no-store' })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default async function CardsContainer({ data, background }) {
    const infoCharacter = await obtenerCharacters(data)

    return (
            <Card key={infoCharacter.id} infoCharacter={infoCharacter} background={background} />
    )
}