import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Link from "next/link";
import Section from "./section";

export default function Features() {
  return (
    <Section title="サービスの特徴" subTitle="素敵な機能が盛りだくさんです">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="border relative rounded-md p-6 shadow space-y-3">
          <div className="aspect-video bg-muted"></div>
          <h2>
            記事タイトル <Link href={"/"} className=" absolute inset-0"></Link>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          {/* <Button variant={"secondary"} asChild>
            <Link href={"/tag"}>tagAAAA</Link>
          </Button> */}
          <button>tag</button>
        </div>
        <div className="border rounded-md p-6 shadow">aaa</div>
        <div className="border rounded-md p-6 shadow">aaa</div>
      </div>
    </Section>
  );
}
