
import { LongText, ShortText, TimeStamp, UniqueId } from "src/app/core/interfaces/types";

export interface Message {
  id:UniqueId;
  title:ShortText;
  text:LongText;
  time:TimeStamp;
}
