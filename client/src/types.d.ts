declare module'*.scss' {
  const content: Record<string, any>
  export = content
}

declare module '*.svg' {
  const content: string;
  export default content;
}
