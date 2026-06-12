declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

interface RequestInit {
  next?: NextFetchRequestConfig;
}
