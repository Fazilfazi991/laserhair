import { NextResponse } from "next/server";

const leads: unknown[] = [];

export async function POST(request: Request) {
  const body = await request.json();

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const lead = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    status: "new",
    ...body
  };

  leads.push(lead);

  return NextResponse.json({ ok: true, lead });
}
