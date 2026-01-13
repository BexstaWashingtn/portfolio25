import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      const flattened = z.flattenError(result.error);

      return NextResponse.json(
        {
          success: false,
          errors: flattened.fieldErrors,
          message: "Validierungsfehler",
        },
        { status: 400 }
      );
    }

    const { hpot } = result.data;

    if (hpot && hpot.trim() !== "") {
      console.log("kommt");

      return NextResponse.json(
        {
          success: true,
          message: "Formular erfolgreich gesendet",
        },
        {
          status: 200,
        }
      );
    }

    // TODO: hier später Mailversand einbauen

    return NextResponse.json({
      success: true,
      message: "Formular erfolgreich gesendet",
    });
  } catch (error) {
    console.error("API /contact error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "serverfehler. Bitte später erneut versuchen.",
      },
      { status: 500 }
    );
  }
}
