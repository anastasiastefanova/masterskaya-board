// Cloudflare Worker: прозрачный прокси к Supabase (REST + Realtime/WebSocket)
const TARGET = "kyazabnvnhpjshgwzeuh.supabase.co";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = TARGET;
    url.port = "";
    return fetch(new Request(url, request));
  },
};
