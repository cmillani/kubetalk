export interface IInfo {
    hostname: string;
}

class Info implements IInfo {
    constructor(public hostname: string) { }
}

export default Info;
