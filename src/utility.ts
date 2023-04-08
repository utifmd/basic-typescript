type Article = {
    title: string,
    content: string,
    author?: string
}
// Partial
const articlePart: Partial<Article> = {
    content: "Shalawat to Nabi"
}
// Required
const article: Required<Article> = {
    title: "Ramadhan",
    content: "Shalawat to Nabi",
    author: "\@utifmd"
}
// Pick
const articlePick: Pick<Article, 'author'> = {
    author: "\@utifmd"
}
// Omit
const articleOmit: Omit<Article, 'author' | 'content'> = {
    title: "Ramadhan"
}
// Exclude
type PrimitiveType = string | number | boolean
const articleExclude: Exclude<PrimitiveType, boolean> = "string or number allowed"

// Record
const apiResponse: Record<string, any> = {
    code: 200,
    status: "OK"
}
// ReturnType
// Parameters