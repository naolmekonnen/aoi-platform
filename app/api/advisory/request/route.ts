import { NextRequest, NextResponse } from 'next/server'

export async function POST(_request: NextRequest) {
  return NextResponse.json({
    error: 'This route has been deprecated. Use /api/advisory instead.',
  }, { status: 404 })
}
