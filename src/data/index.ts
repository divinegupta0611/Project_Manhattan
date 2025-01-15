import { StateData } from "./types";
import { rajasthanData } from "./states/rajasthan";
import {arunachalpradeshData} from "./states/arunachalpradesh"
import {assamData} from "./states/assam"
import {goaData} from "./states/Goa"
import {punjabData} from "./states/punjabData"
import {uttrakhandData} from "./states/uttrakhand"
import {MaharashtraData} from "./states/Maharashtra"
import {keralaData} from "./states/kerala"
import {haryanaData} from "./states/haryana"
export const stateDataMap: Record<string, StateData> = {
  rajasthan: rajasthanData,
  arunachalpradesh: arunachalpradeshData,
  assam : assamData,
  goa : goaData,
  punjab : punjabData,
  uttrakhand: uttrakhandData,
  maharashtra: MaharashtraData,
  kerala:keralaData,
  haryana:haryanaData,
};
