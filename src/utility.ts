type Article = {
    title: string,
    content: string,
    author?: string
}

// Partial
const articlePart: Partial<Article> = {
    content: "Shalawat to Nabi"
}
console.log("articlePart", articlePart);

// Required
const article: Required<Article> = {
    title: "Ramadhan",
    content: "Shalawat to Nabi",
    author: "\@utifmd"
}
console.log("article", article);

// Pick
const articlePick: Pick<Article, 'author'> = {
    author: "\@utifmd"
}
console.log("articlePick", articlePick);

// Omit
const articleOmit: Omit<Article, 'author' | 'content'> = {
    title: "Ramadhan"
}
console.log("articleOmit", articleOmit);

// Exclude
type PrimitiveType = string | number | boolean
const articleExclude: Exclude<PrimitiveType, boolean> = 12 // "string or number is allowed"
console.log("articleExclude", articleExclude);

// Record
const apiResponse: Record<string, any> = {
    code: 200,
    status: "OK"
}
apiResponse.data = {}
console.log("apiResponse", apiResponse);

type RectType = {
    x: number, y: number
}
// ReturnType
const rectShape: ReturnType<() => RectType> = {
    x: 20, y: 20
}
console.log("rectShape", rectShape);

// Parameters
const rectShapeWithParams: Parameters<(_: RectType) => void>[0] = {
    x: 30, y: 30
}
console.log("rectShapeWithParams", rectShapeWithParams);