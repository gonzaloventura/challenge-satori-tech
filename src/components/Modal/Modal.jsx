'use client'

export default function Modal({ infoCharacter, showModal, setShowModal, status }) {
    return (
        <>
            <dialog id={`modal_${infoCharacter.id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl">{infoCharacter.name}</h3>
                    <div className="flex gap-4 py-4">
                        <div>
                            <figure><img className="rounded-full w-32 h-32" src={infoCharacter.image} alt={infoCharacter.name} /></figure>
                        </div>
                        <div>
                            <p><span className="font-semibold">Estado:</span> <span className={status}></span>{infoCharacter.status}</p>
                            <p><span className="font-semibold">Especie:</span> {infoCharacter.species}</p>
                            <p><span className="font-semibold">Tipo:</span> {infoCharacter.type}</p>
                            <p><span className="font-semibold">Género:</span> {infoCharacter.gender}</p>
                            <p><span className="font-semibold">Origen:</span> {infoCharacter.origin.name}</p>
                            <p><span className="font-semibold">Ubicación:</span> {infoCharacter.location.name}</p>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button></button>
                </form>

            </dialog>

        </>
    )
}