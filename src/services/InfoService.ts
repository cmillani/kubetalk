import Info, { IInfo } from "@entities/Info";
import os from "os";

class InfoService {
    getInfo(): IInfo {
        return new Info(os.hostname());
    }
}

export default InfoService;