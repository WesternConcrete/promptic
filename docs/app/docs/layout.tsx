import { DocsLayout } from "fumadocs-ui/layout"
import "fumadocs-ui/style.css"
import { SquareTerminal } from "lucide-react"
import type { ReactNode } from "react"
import { pageTree } from "../source"
import StargazersButton from "./_components/stargazers-button"

export const revalidate = 900 // revalidate every 15 minutes

export default async function RootDocsLayout({
  children,
}: {
  children: ReactNode
}) {
  const data = await fetch("https://api.github.com/repos/knowsuchagency/promptic")
  const stargazersCount = (await data.json()).stargazers_count

  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        githubUrl: "https://github.com/knowsuchagency/promptic",
        title: (
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <SquareTerminal className="size-5" />
              promptic
            </span>
            <StargazersButton count={stargazersCount} />
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
