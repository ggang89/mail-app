"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema, Schema } from "../schema/index";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Send } from "lucide-react";
import { sendMail } from "../actions/send-mail";

export default function FormComponent() {
  // useForm의 제네릭 타입으로 사용
  const form = useForm<Schema>({
    // 만든 schema를 zodResolver를 통해 react-hook-form에 연결
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
  });

  // 서버액션 연결하기
  const onValid: SubmitHandler<Schema> = async (data) => {
    try {
      const result = await sendMail(data);
      if (result.isOK) {
        alert("메일이 성공적으로 발송되었습니다.");
      } else {
        form.setError("email", { message: result.error });
      }
    } catch {
      console.log("서버에러");
      form.setError("email", {
        message: "서버와의 통신에 실패했습니다. 다시 시도해주세요",
      });
    }
  };

  // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log("성공", values);
  //   form.reset();
  // }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>
          Enter your info below to receive a lucky letter. 🍀
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onValid)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="10글자 이상 입력해주세요."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordCheck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">PasswordCheck</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="비밀번호를 다시 입력해주세요."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" >
              <div className="flex items-center gap-2">
                Submit
                <Send />
              </div>
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>© 2025. All rights reserved.</CardFooter>
    </Card>
  );
}
