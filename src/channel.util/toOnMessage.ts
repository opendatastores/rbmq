import * as amqplib from "amqplib/callback_api";
import { isNullOrUndefined } from "util";

export const toOnMessage = (
  process: (data: any) => void,
) => (msg: amqplib.Message | null) => {
  let data: any = null;

  if (!isNullOrUndefined(msg)) {
    const text = msg.content.toString();
    data = JSON.parse(text);
  }

  process(data);
};
