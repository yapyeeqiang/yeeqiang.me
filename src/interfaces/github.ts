interface RepoGeneral {
    id: string
    url: string
    title: string
    description: string
    language: string
    forks: number
    watchers: number
    projectURL?: string
}

export interface RepoResult extends RepoGeneral {
    createdAt: Date
    updatedAt: Date
}

export interface RepoFormat extends RepoGeneral {
    createdAt: string
    updatedAt: string
}
