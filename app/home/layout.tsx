export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
        return(  
            <div className="flex min-h-screen flex-col">
            {/* @ts-ignore */}
                <main className="flex flex-1 flex-col bg-muted/50">{children}</main>
            </div>
        )
  }