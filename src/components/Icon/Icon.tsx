import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import React from 'react';

import icoMoonConfig from '../../../assets/icons/selection.json';

import {IconName} from "./IconName";

export interface Props {
    readonly name: `${IconName}`;
}

const IcoMoonIcon = createIconSetFromIcoMoon(icoMoonConfig, 'IcoMoon', 'icomoon.ttf');

export const Icon = (
    props: React.ComponentProps<typeof IcoMoonIcon> & Props
): React.ReactElement => <IcoMoonIcon {...props} />;

export default Icon;
