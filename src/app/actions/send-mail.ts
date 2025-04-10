"use server";

import { prisma } from "@/lib/db";
import { error } from "console";

type Params = {
  email: string;
};

export async function sendMail(params: Params) {
  const { email } = params;

  let user = null;

  // 1. 이메일을 가지고 유저를 찾는다
  try {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch {
    return {
      isOK: false,
      error: "유저를 찾는데 실패했습니다. 다시 시도해주세요.",
    };
  }

  // 2. 유저가 존재하면 (이미 메일을 받은 유저니까) 실행이 멈추도록 error을 던진다
  if (user) {
    return {
      isOK: false,
      error: "이미 존재하는 이메일입니다.",
    };
  }
  // 3. 유저가 없으면 생성한다.
  try {
    await prisma.user.create({
      data: {
        email: email,
      },
    });
  } catch {
    return {
      isOK: false,
      error: "유저를 생성하는데 실패했습니다. 다시 시도해주세요.",
    };
  }
  // 4. 생성한 유저에게 메일을 보낸다.
  // 5. 성공했다는 의미로 isOK: true를 리턴한다.

  return {
    isOK: true,
  };
}
