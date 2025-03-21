"use client";
import * as OneSignal from "@onesignal/node-onesignal";

const configuration = OneSignal.createConfiguration({
  restApiKey: process.env["NEXT_PUBLIC_API_KEY"]!,
});
export const OneSignalClient = new OneSignal.DefaultApi(configuration);
