/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "../descriptor/DescriptorServer.js";
import { PowerSourceBehavior } from "./PowerSourceBehavior.js";

/**
 * This is the default server implementation of {@link PowerSourceBehavior}.
 */
export class PowerSourceServer extends PowerSourceBehavior {
    override initialize() {
        this.agent.get(DescriptorServer).addDeviceTypes("PowerSource");
    }
}
