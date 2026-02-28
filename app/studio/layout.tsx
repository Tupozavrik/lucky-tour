export const metadata = {
    title: 'Админ-панель | Lucky Tour',
    description: 'Управление контентом сайта',
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <style>{`
        body { margin: 0; padding: 0; overflow: hidden; }
      `}</style>
            {children}
        </>
    )
}
