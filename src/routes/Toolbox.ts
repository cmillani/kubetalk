import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import InfoService from '@services/InfoService';

const router = Router();
const { OK } = StatusCodes;
const infoService = new InfoService();



/******************************************************************************
 *                      RFC to Exit application - "POST /api/toolbox/crash"
 ******************************************************************************/

router.post('/crash', async (req: Request, res: Response) => {
    res.sendStatus(OK);
    process.exit(1);
});



/******************************************************************************
 *                       RFC to Increases memory usage - "POST /api/toolbox/usememory"
 ******************************************************************************/

var memoryBag: string[] = [];
router.post('/usememory', async (req: Request, res: Response) => {
    var i = 0;
    while(i < 10_000_000) {
        memoryBag.push("MemoryData");
        i++;
    }
    console.log(memoryBag.length);
    res.sendStatus(OK);
});


/******************************************************************************
 *                       RFC to Trigger high cpu usage - "POST /api/toolbox/usecpu"
 ******************************************************************************/
router.post('/usecpu', async (req: Request, res: Response) => {
    res.sendStatus(OK);
    var i = 0;
    while(i < 10_000_000_000) {
        i++;
    }
    console.log("Out of Loop!");
});

/******************************************************************************
 *                       GET Proc info - "GET /api/toolbox/info"
 ******************************************************************************/

router.get('/info', async (req: Request, res: Response) => {
    const info = infoService.getInfo();
    return res.status(OK).json(info);
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
