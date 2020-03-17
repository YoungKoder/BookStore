import * as fs from "fs";

export const config = {
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING as string,
    DB_NAME: process.env.DB_NAME as string
};

function getOrReadContent(
    content: string | undefined,
    fallbackFile: string | undefined
): string | undefined{
    if(content){
        return content;
    }

    if(!fallbackFile){
        return undefined;
    }

    return fs.readFileSync(fallbackFile, "utf8");
}