/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Logger } from "@project-chip/matter.js-general";
import { LowPowerServer } from "@project-chip/matter.js/behavior/definitions/low-power";

const logger = Logger.get("TestLowPowerServer");

export class TestLowPowerServer extends LowPowerServer {
    override initialize() {
        this.events.enterLowPowerMode.on(() => {
            logger.info(`Sleep triggered`);
        });
    }
}
