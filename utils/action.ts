"use server";

import { prisma } from "@/lib/prisma";

export const postForm = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    console.log(formData);

    await prisma.Contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response("Message sent successfully!", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
