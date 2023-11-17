import CardsContainer from "@/components/CardsContainer/CardsContainer"


function obtenerLocations(query) {
    return fetch(`${process.env.API_URL}/location/${query}`, { cache: 'no-store' })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default async function SearchPage({ searchParams }) {
    const params = searchParams
    const search = await obtenerLocations(params.location)

    return (
        <div className="flex flex-col gap-10 p-4 md:p-10">
            {/* <h1 className="text-lg md:text-2xl font-semibold">{search.length == (null || undefined) ? 'No se encontraron resultados con "' + params.q + '"' : (search.length === 1 ? 'Se encontró 1 resultado con "' + params.q + '"' : "Se encontraron " + search.length + ' resultados con "' + params.q + '"')}</h1> */}
            <main>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 md:gap-8 grid-flow-row  items-start">
                    {search.residents.slice(0, 5).map((item) => {
                        return (
                            <CardsContainer key={item.id} data={item} background={params.location} /> 
                        )
                    })
                    }
                </div>
            </main>
        </div>
    )
}