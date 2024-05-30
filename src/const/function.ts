import { postType } from "./const";

export function getPostType(platform: string) {
    const find = postType.find(item => item.platform === platform);
    return find?.listPost || []
}