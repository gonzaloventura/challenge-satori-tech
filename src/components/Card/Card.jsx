'use client'

import Link from "next/link"
import Modal from "../Modal/Modal"
import { useState } from "react"

export default function Card({ infoCharacter, background }) {
    const [showModal, setShowModal] = useState(false)

    function colorFondo() {
        if (background > 50 && background < 80) {
            return `card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all text-blue-200 bg-blue-800 cursor-pointer`
        } else if (background < 50) {
            return `card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all text-green-100 bg-green-800 cursor-pointer`
        } else if (background > 80) {
            return `card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all text-red-200 bg-red-800 cursor-pointer`
        }
    }

    function statusIcon() {
        if (infoCharacter.status == "Alive") {
            return `badge badge-success badge-xs`
        }
        if (infoCharacter.status == "Dead") {
            return `badge badge-error badge-xs`
        }
        if (infoCharacter.status == "unknown") {
            return `badge badge-light badge-xs`
        }
    }

    return (
        <>
            <div className={colorFondo()}>
                <div className="rounded-xl" onClick={() => document.getElementById(`modal_${infoCharacter.id}`).showModal()}>
                    <figure><img className="scale-105" src={infoCharacter.image} alt={infoCharacter.name} /></figure>
                    <div className="card-body grow-0">
                        <h1 className="font-bold text-2xl">{infoCharacter.name}</h1>
                        <div className="font-medium flex justify-start">
                            <p className="flex gap-2 items-center capitalize max-w-fit"><span className={statusIcon()}></span>{infoCharacter.status}</p>
                            <span className="mx-2"> - </span>
                            <p className="max-w-fit whitespace-nowrap">{infoCharacter.species}</p>
                        </div>
                        <p className="">{infoCharacter.origin.name}</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-black bg-opacity-10">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">
                            Episodios
                        </div>
                        <ul className="collapse-content">
                            {infoCharacter.episode.slice(0, 3).map((item) => {
                                return <li className="hover:text-gray-300" key={item.substring(40)}><Link href={item} target="_blank">Episodio {item.substring(40)}</Link></li>
                            })}

                        </ul>
                    </div>
            </div>
            <Modal infoCharacter={infoCharacter} showModal={showModal} setShowModal={setShowModal} status={statusIcon()} />
        </>
    )
}