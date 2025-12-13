import { updateSession } from "./app/utils/supabase/middleware";

export default async function proxy(request) {
  return await updateSession(request);
}
