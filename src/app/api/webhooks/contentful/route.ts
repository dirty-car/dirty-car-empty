export const dynamic = 'force-dynamic';

export async function POST(request: Request) {

  const { body, headers } = request;


  console.log(JSON.stringify(body, null, 2), '_____body');
  console.log(JSON.stringify(headers, null, '_____headers'));

  if (body) {
    return new Response(null, {status: 200});
  }
 
  return new Response(null, {status: 404});
}

export async function GET(request: Request) {

  const { body, headers } = request;


  console.log(JSON.stringify(body, null, 2), '_____body');
  console.log(JSON.stringify(headers, null, 2),'_____headers');

  if (body) {
    return new Response(null, {status: 200});
  }
 
  return new Response(JSON.stringify(headers, null, 2), {status: 201});
}