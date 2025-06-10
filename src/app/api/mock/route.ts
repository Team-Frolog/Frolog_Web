import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { authorization_code } = await request.json();
  return NextResponse.json({
    result: false,
    email: 'test@test.com',
    is_registerd: false,
    login_type: null,
    email_verified_token: 'test',
  });
}
