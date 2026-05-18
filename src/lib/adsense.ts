export const adsenseClient =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-6750754859429492";

export const adsensePublisherId =
  process.env.GOOGLE_ADSENSE_PUBLISHER_ID ??
  adsenseClient.replace(/^ca-/, "");
