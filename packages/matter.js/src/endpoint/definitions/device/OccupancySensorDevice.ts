/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    OccupancySensingServer as BaseOccupancySensingServer
} from "../../../behavior/definitions/occupancy-sensing/OccupancySensingServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "@project-chip/matter.js-general";

/**
 * An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting the occupancy
 * state in a designated area.
 *
 * @see {@link MatterSpecification.v13.Device} § 7.3
 */
export interface OccupancySensorDevice extends Identity<typeof OccupancySensorDeviceDefinition> {}

export namespace OccupancySensorRequirements {
    /**
     * The Identify cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The OccupancySensing cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link OccupancySensingServer} for convenience.
     */
    export const OccupancySensingServer = BaseOccupancySensingServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer, OccupancySensing: OccupancySensingServer } };
}

export const OccupancySensorDeviceDefinition = MutableEndpoint({
    name: "OccupancySensor",
    deviceType: 0x107,
    deviceRevision: 3,
    requirements: OccupancySensorRequirements,
    behaviors: SupportedBehaviors(
        OccupancySensorRequirements.server.mandatory.Identify,
        OccupancySensorRequirements.server.mandatory.OccupancySensing
    )
});

export const OccupancySensorDevice: OccupancySensorDevice = OccupancySensorDeviceDefinition;
