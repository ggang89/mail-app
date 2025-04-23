"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { formSchema, Schema } from "../schema/index";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
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
import { toast } from "sonner";

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
    },
  });

  // 서버액션 연결하기
  const onSubmit: SubmitHandler<Schema> = async (data) => {
    //console.log("data", data);
    try {
      const result = await sendMail(data);
      // console.log("data-result", result);

      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });
      //console.log("서버 응답", result);

      if (result.isOK) {
        toast(
          "✅ " + result.name + "님! " + "메일이 성공적으로 발송되었습니다."
        );
        // toast(result.weather?.main.temp+"°C "+result.weather?.weather[0].main);
      } else {
        console.log("에러", result.error);
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
    <Card className="mx-auto max-w-2xl py-10 px-4">
      <CardHeader>
        <CardTitle>Current Weather🌈</CardTitle>
        <CardDescription>현재 날씨를 메일로 보내드립니다.💌</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <FormDescription>
                    ※ 같은 메일로 한 번만 받을 수 있습니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">
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
