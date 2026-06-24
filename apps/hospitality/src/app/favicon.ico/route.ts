const ICON_PATH = "/hospitality.svg";

export function GET(request: Request) {
  return new Response("Redirecting", {
    status: 308,
    headers: {
      Location: ICON_PATH,
    },
  });
}

export function HEAD(request: Request) {
  return new Response(null, {
    status: 308,
    headers: {
      Location: ICON_PATH,
    },
  });
}