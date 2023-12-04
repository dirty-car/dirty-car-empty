import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const req = await request.json();

  revalidatePath('/[lang]');
  revalidatePath('[lang]');
  revalidatePath('/');
 
  if(req.sys.id) {
    return new Response(`Item with ID: "${req.sys.id}" was updated`, {status: 200});
  }
 
  return new Response(`Something went wrong`, {status: 500});
}