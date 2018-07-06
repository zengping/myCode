import Router from 'koa-router';

import SystemRouter from './system';
import IndexItemRouter from './indexItem';
import InternetRouter from './internet';
import CompanySubmitOnlineRouter from './companySubmitOnline';
import CompanyDataDockingRouter from './companyDataDocking';
import DataPlatformRouter from './dataPlatform';
import DataPlatformUploadRouter from './dataPlatformUpload';
import HeldOutRouter from './heldOut';
import HeldOutDispersedRouter from './heldOutDispersed';
import DataQualityManagementRouter from './dataQualityManagement';
import SubmitRouter from './submit';
import SubmitModelRouter from './submitModel';
import SubmitToolRouter from './submitTool';

import { wrapper } from '../../lib';

const router = new Router();

wrapper(router);

// swagger docs avaliable at http://localhost:3000/api/swagger-html
router.swagger({

  title: 'Example Server',
  description: 'API DOC',
  version: '1.0.0',

  // [optional] default is root path.
  prefix: '/api/v1',

  // [optional] default is /swagger-html
  swaggerHtmlEndpoint: '/swagger-html',

  // [optional] default is /swagger-json
  swaggerJsonEndpoint: '/swagger-json',

  // [optional] additional options for building swagger doc
  // eg. add api_key as shown below
  swaggerOptions: {
    securityDefinitions: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization'
      }
    },
  }
});
router.map(SystemRouter);
router.map(IndexItemRouter);
router.map(InternetRouter);
router.map(CompanySubmitOnlineRouter);
router.map(CompanyDataDockingRouter);
router.map(DataPlatformRouter);
router.map(DataPlatformUploadRouter);
router.map(HeldOutRouter);
router.map(HeldOutDispersedRouter);
router.map(DataQualityManagementRouter);
router.map(SubmitRouter);
router.map(SubmitModelRouter);
router.map(SubmitToolRouter);

export default router;
