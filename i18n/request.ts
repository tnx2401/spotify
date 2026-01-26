import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "en-US";

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  }
});
