/**
 * File created by suenlue on 2019-12-19.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { InjectionToken } from '@angular/core';

export const DEV_NAME: InjectionToken<string> =
            new InjectionToken('name of the developer');

export const TEAM_NAMES: InjectionToken<string> =
            new InjectionToken('names of all developer');
