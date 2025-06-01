import { FreshContext } from "$fresh/server.ts";
import { generateSwear } from "../../lib/utils.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const body = generateSwear()
  return new Response(body);
};