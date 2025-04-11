// handle REST API routes GET,POST,...

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // get action by prisma
  const result = await prisma.product.findMany({ include: { images: true } });

  return NextResponse.json({
    data: result,
  });
}

// POST / PUT / DELETE
