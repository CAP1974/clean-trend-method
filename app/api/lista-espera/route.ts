import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) return NextResponse.json({ error: 'Email obrigatório' }, { status: 400 });
  const { error } = await supabase.from('lista_espera').insert({ email });
  if (error && error.code !== '23505') return NextResponse.json({ error: 'Erro' }, { status: 500 });
  return NextResponse.json({ success: true });
}
