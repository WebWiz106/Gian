import { NextRequest, NextResponse } from "next/server";
import { QueryFormData } from "@/model/query-mail";
import { connectDB } from "@/utils/db";

export async function GET(request: NextRequest) {
  try {
    const userID = request.nextUrl.searchParams.get("userID");
    await connectDB();

    const formData = await QueryFormData.findById(userID);

    if (formData) {
      formData.verified = true;
      await formData.save();
      return NextResponse.json({
        message: "Document verified successfully",
        formData,
      });
    } else {
      // If document is not found
      return NextResponse.json(
        {
          message: "Document not found",
        },
        {
          status: 404,
        },
      );
    }
  } catch (error) {
    console.error("Error verifying query mail:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      },
    );
  }
}
