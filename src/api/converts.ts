import { paths, components } from "./models";

export type apiType = components["schemas"];
export type User = apiType["UserRead"];
export type apiPath = keyof paths;