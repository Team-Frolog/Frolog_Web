import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { authorization_code } = await request.json();
  return NextResponse.json({
    result: false,
    email: 'test@test.com',
    is_registerd: false,
    login_type: null,
    email_verified_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGZpbGxlZDc0MThAZ21haWwuY29tIiwidGFyZ2V0Ijoic2lnblVwIiwiaWF0IjoxNzUwMzQzNjI2LCJleHAiOjE3NTA0MzAwMjYsInN1YiI6InZlcmlmeUVtYWlsQ29kZSJ9.WDfsAF3npSC3NKkOSOjmtkKazGIY4gfneFxz6zs2-qE',
  });
}
