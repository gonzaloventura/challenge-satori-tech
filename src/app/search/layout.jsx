import Search from '@/components/Search/Search'

export default function LayoutSearch({ children }) {
    return (
        <main className="flex flex-col gap-10 items-center justify-between p-24">
            <Search />
            {children}
        </main>
    )
}