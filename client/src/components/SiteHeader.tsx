import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGoToHomeSection } from "@/hooks/useGoToHomeSection";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function SiteHeader() {
  const goSection = useGoToHomeSection();
  const [open, setOpen] = useState(false);

  const nav = (id: string) => {
    setOpen(false);
    goSection(id);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline text-foreground hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm leading-none">以</span>
          </div>
          <span className="font-bold text-lg font-poppins tracking-tight">以太数字</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            type="button"
            className="text-sm hover:text-accent transition bg-transparent border-0 cursor-pointer text-foreground p-0"
            onClick={() => goSection("services")}
          >
            服务
          </button>
          <button
            type="button"
            className="text-sm hover:text-accent transition bg-transparent border-0 cursor-pointer text-foreground p-0"
            onClick={() => goSection("about")}
          >
            关于
          </button>
          <button
            type="button"
            className="text-sm hover:text-accent transition bg-transparent border-0 cursor-pointer text-foreground p-0"
            onClick={() => goSection("contact")}
          >
            联系
          </button>
          <Button
            type="button"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => goSection("contact")}
          >
            立即咨询
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="md:hidden border-border shrink-0"
                aria-label="打开菜单"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>导航</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pb-6">
                <Button
                  type="button"
                  variant="ghost"
                  className="justify-start"
                  onClick={() => nav("services")}
                >
                  服务
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="justify-start"
                  onClick={() => nav("about")}
                >
                  关于
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="justify-start"
                  onClick={() => nav("contact")}
                >
                  联系
                </Button>
                <Button
                  type="button"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                  onClick={() => nav("contact")}
                >
                  立即咨询
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
