import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 size-4" />
          返回
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <Image
            src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/production/upload/chato_image/avater/cb4b187346080337852dfe0249c485fe.png"
            className="mx-auto rounded-md object-fill"
            alt=""
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            创建一个帐户
          </h1>
          <p className="text-sm text-muted-foreground">
          使用您的电子邮件和密码创建一个帐户
          </p>
        </div>
        <UserAuthForm type="register" />
        <p className="px-8 text-center text-sm text-muted-foreground">
            已经有帐户？{" "}
          <Link
            href="/login"
            className="hover:text-brand font-semibold text-gray-800 underline underline-offset-4"
          >
            请登录
          </Link>
          。
        </p>
      </div>
    </div>
  );
}
