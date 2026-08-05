const BaseController = require("hmpo-form-wizard").Controller;
const DateControllerMixin = require("hmpo-components").mixins.Date;

const DateController = DateControllerMixin(BaseController);
const { PACKAGE_NAME } = require("../../../lib/config");
const logger = require("../../../lib/logger").get(PACKAGE_NAME);

class PassportDetailsController extends DateController {
  _padYear(value, offset) {
    logger.info("1 - offset value ignored as no padding is applied", offset);
    logger.info("2 - offset value ignored as no padding is applied", { offset });
    logger.info("3 - offset value {} ignored as no padding is applied", offset);
    logger.info("4 - offset value {} ignored as no padding is applied", { offset });
    logger.info({ offset }, "5 - offset value ignored as no padding is applied");
    logger.info(offset, "6 - offset value ignored as no padding is applied");
    logger.info({ offset }, "7 - offset value {} ignored as no padding is applied");
    logger.info(offset, "8 - offset value {} ignored as no padding is applied");
    return value;
  }
}

module.exports = PassportDetailsController;
